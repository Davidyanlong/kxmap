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
