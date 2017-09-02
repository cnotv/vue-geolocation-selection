<template>
    <pre>
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "GeometryCollection",
      "geometry": {
        "type": "Circle",
        "coordinates": [
          {{ $root.center.lat }},
          {{ $root.center.lng }}
        ],
        "properties": {
          "radius": "{{ $root.radius }}"
        }
      }
    }
  ]
}
    </pre>
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
              this.$root.center.lat,
              this.$root.center.lng,
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