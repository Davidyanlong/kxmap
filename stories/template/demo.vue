<template>
  <div id="container" class="isLoading">
    <div id="cameraInfo"></div>
    <div ref="mapRef" id="map"></div>
    <canvas id="webgl"></canvas>
    <svg id="svg">
      <g id="cross">
        <line x1="629.5" x2="649.5" y1="359.5" y2="359.5" />
        <line x1="639.5" x2="639.5" y1="349.5" y2="369.5" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    getContainer() {
      return this.$refs.mapRef;
    },
  },
};
</script>

<style scoped>
#webgl,
#svg {
  width: 1280px;
  height: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -640px;
  margin-top: -360px;
}

#cross line {
  stroke: black;
  opacity: 0.5;
}
</style>
