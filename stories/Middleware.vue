<template>
  <div style="height: 100%">
    <div class="print-info" v-if="isDefaultShow && info">
      输入的信息是: <br />
      {{ info }}
    </div>
    <template v-if="isDefaultShow">
      <div ref="mapRef" id="map"></div>
    </template>
    <demo ref="demoRef" />
  </div>
</template>

<script>
import "./middleware.css";
import demo from "./template/demo.vue";

// import { transform } from '@babel/core';
const BasePath = "../showcase/";

export default {
  name: "my-middleware",
  props: {
    code: {
      type: String,
      default: "",
    },
    isCommon: {
      type: Boolean,
      default: false,
    },
    isDemo: {
      type: Boolean,
      default: false,
    },
    isViewer: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    demo,
  },
  computed: {
    isPrintInfo() {
      return Math.random();
    },
    isDefaultShow() {
      return !(this.isDemo || this.isCommon || this.isViewer);
    },
  },
  data() {
    return {
      path: "",
      info: "",
      updataMethod: null,
      handle: null,
      destoryCallbackFn: null,
    };
  },
  created() {
    this.path = `${BasePath}${this.code}`;
    console.log(`目前示例代码的路径是：${this.path}`);
  },
  async mounted() {
    this.handle = await this._getScript();
    // 获取输出信息
    try {
      this.info = (this.handle.printInfo && this.handle.printInfo()) || "";
    } catch {
      this.info = "";
    }
    // 执行main函数
    try {
      this.handle.main &&
        this.handle.main({
          getContainerDom: () => {
            return this.getContainer();
          },
          update: () => {
            this.update();
          },
          addUpdatePrintInfo: (fn) => {
            this.addUpdatePrintInfo(fn);
          },
          destoryCallback: (fn) => {
            this.destoryCallbackFn = fn;
          },
        });
    } catch (e) {
      console.error(e);
    }
  },
  beforeDestroy() {
    const ev = new CustomEvent("destroy");
    const el = this.$refs.mapRef;
    el?.dispatchEvent(ev);
    if (this.destoryCallbackFn) {
      try {
        this.destoryCallbackFn();
      } catch (e) {
        console.error("destory error", e);
      }
    }
  },
  methods: {
    deleteCache() {
      // todo
    },
    getContainer() {
      if (this.isDemo) {
        return this.$refs.demoRef.getContainer();
      }
      return this.$refs.mapRef;
    },
    addUpdatePrintInfo(fn) {
      // 这里尽快能的摆脱双向绑定，因为不需要
      this.updataMethod = this.updataMethod || {};
      this.updataMethod.arr = this.updataMethod.arr || [];
      if (fn) {
        if (!this.updataMethod.arr.includes(fn)) {
          this.updataMethod.arr.push(fn);
        }
      }
    },
    update() {
      let that = this;
      that.info = "";
      if (this.handle && this.updataMethod?.arr?.length > 0) {
        this.updataMethod.arr.forEach((fn) => {
          let msg = fn();
          that.info += msg ? msg + "\n" : "";
        });
      }
    },
    _getScript() {
      this.deleteCache();
      const path = () => "../showcase/test.ts";
      if (this.code.includes(".ts")) {
        // 这里替换后，再补充目的是为了不让vite 报警告信息
        let code = this.code.replace(".ts", "");
        return import(`../showcase/${code}.ts`);
      } else if (this.code.includes(".js")) {
        // 这里替换后，再补充目的是为了不让vite 报警告信息
        code = this.code.replace(".js", "");
        return import(`../showcase/${code}.js`);
      } else {
        // return import(`../showcase/${this.code}`);
        console.error("目前还不支持这种格式，轻补充代码……");
      }
    },
  },
};
</script>
