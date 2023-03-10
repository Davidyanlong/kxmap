import glsl from "./plugins/rollup-plugin-glsl/index.js";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import copy from "rollup-plugin-copy";
import dts from "rollup-plugin-dts";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";

// https://www.rollupjs.com/
const fs = require("fs");

const path = require("path");

const camelCase = require("camelcase");

const { BUILD_TYPE, NODE_ENV } = process.env;
const currentPath = process.cwd();
const pkg = () => {
  return {
    location: currentPath,
    pkgJson: require(path.resolve(currentPath, "package.json")),
  };
};

function toGlobalName(pkgName) {
  return camelCase(pkgName);
}

const extensions = [".js", ".jsx", ".ts", ".tsx", ".ts.vs", ".ts.fs"];
const mainFields =
  NODE_ENV === "development" ? ["debug", "module", "main"] : undefined;
const glslPath = "./src/shaders";

const commonPlugins = [
  resolve({ extensions, preferBuiltins: true, mainFields }),
  glsl({
    include: [
      `${glslPath}/chunks/material_buffer/*.glsl`,
      `${glslPath}/chunks/*.glsl`,
      `${glslPath}/*`,
    ],
  }),
  commonjs(),
  babel({
    extensions,
    babelHelpers: "bundled",
    exclude: ["node_modules/**", "packages/**/node_modules/**"],
  }),

  NODE_ENV === "development"
    ? serve({
        contentBase: "packages",
        port: 9999,
      })
    : null,
];

function config({ location, pkgJson }) {
  const input = path.join(location, "src", "index.ts");
  const dependencies = Object.assign(
    {},
    pkgJson.dependencies ?? {},
    pkgJson.peerDependencies ?? {}
  );
  const external = Object.keys(dependencies);
  let name = pkgJson.name;
  const filename = getName(pkgJson);
  commonPlugins.push(
    replace({
      preventAssignment: true,
      __buildVersion: pkgJson.version,
    })
  );

  return {
    umd: (compress) => {
      const globalName = toGlobalName(pkgJson.name);
      name = globalName;

      let file = path.join(location, "dist", "umd.js");

      const plugins = [...commonPlugins];

      const globals = {};
      external.forEach((pkgName) => {
        globals[pkgName] = toGlobalName(pkgName);
      });

      return {
        input: input,
        external,
        output: [
          {
            file,
            name,
            format: "umd",
            sourcemap: false,
            globals,
          },
          {
            file: path.join(
              location,
              "dist",
              `${filename}.umd@${pkgJson.version}.min.js`
            ),
            name,
            format: "umd",
            sourcemap: false,
            globals,
            plugins: [terser()],
          },
        ],
        plugins,
      };
    },
    module: () => {
      const plugins = location.includes("bvh")
        ? [
            ...commonPlugins,
            copy({
              targets: [
                {
                  src: "../packages/bvh/dist/bvh.umd.js",
                  dest: "../static/workers/",
                },
              ],
              verbose: true,
              hook: "closeBundle",
            }),
          ]
        : [...commonPlugins];
      return {
        input,
        external,
        output: [
          {
            file: path.join(location, pkgJson.module),
            format: "es",
            sourcemap: true,
          },
          {
            file: path.join(
              location,
              "dist",
              `${filename}.module@${pkgJson.version}.js`
            ),
            format: "es",
            sourcemap: true,
            plugins: [terser()],
          },
          {
            file: path.join(location, pkgJson.main),
            format: "cjs",
            sourcemap: true,
          },
          {
            file: path.join(
              location,
              "dist",
              `${filename}.cjs@${pkgJson.version}.js`
            ),
            format: "cjs",
            sourcemap: true,
            plugins: [terser()],
          },
        ],
        plugins,
      };
    },
    tsd: () => {
      return {
        input,
        plugins: [dts()],
        output: {
          file: path.join(location, pkgJson.types),
          format: "esm",
        },
      };
    },
  };
}

async function makeRollupConfig({
  type,
  compress = false,
  visualizer = true,
  ..._
}) {
  return config({ ..._ })[type](compress, visualizer);
}

let promises = [];

switch (BUILD_TYPE) {
  case "UMD":
    promises.push(...getUMD());
    break;
  case "MODULE":
    promises.push(...getModule());
    break;
  case "ALL":
    promises.push(...getAll());
    break;
  default:
    break;
}

function getUMD() {
  const configs = [pkg()].filter(
    (pkg) => pkg.pkgJson.browser || pkg.pkgJson.worker
  );
  if (config.length === 0) {
    console.error(
      "没有找到需要打包成UMD的包，如需打包为UMD请在需要编译的包package.json 中加入`{browser: dist/umd.js}`, 类似这样的打包配置"
    );
  }
  return configs
    .map((config) => makeRollupConfig({ ...config, type: "umd" }))
    .concat(
      configs.map((config) =>
        makeRollupConfig({
          ...config,
          type: "tsd",
        })
      )
    );
}

function getModule() {
  const configs = [pkg()];
  return configs
    .map((config) => makeRollupConfig({ ...config, type: "module" }))
    .concat(
      configs.map((config) =>
        makeRollupConfig({
          ...config,
          type: "tsd",
        })
      )
    );
}

function getAll() {
  return [...getModule(), ...getUMD()];
}

function getName(pkgJson) {
  let arr = pkgJson.name.split("/");
  return arr[arr.length - 1];
}
export default Promise.all(promises);
