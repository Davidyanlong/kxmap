<template>
  <div id="container" class="isLoading">
    <div id="cameraInfo"></div>
    <div ref="mapRef" id="map"></div>
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
