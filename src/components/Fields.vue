<template>
  <pre>{{GeoJSON}}</pre>
</template>

<script>

export default {
  name: 'fields',
  data() {
    return {
      GeoJSON: {
        type: 'FeatureCollection',
        features: [{
          type: 'GeometryCollection',
          geometry: {
            type: 'Circle',
            coordinates: [
              this.$root.latitude,
              this.$root.longitude,
            ],
            properties: {
              radius: this.$root.radius,
            },
          },
        }],
      },
    };
  },
};
</script>

<style scoped lang="scss">
pre {
  padding: 1rem;
  background-color: #fff;
  color: #2c3e50;
}
</style>