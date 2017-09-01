<template>
  <div class="o-inputs">
    <h1>{{ msg }}</h1>
    <input type="number" name="latitude" step="any" v-model="latitude" placeholder="latitude" pattern="[0-9.-]">
    <input type="number" name="longitude" step="any" v-model="longitude" placeholder="longitude" pattern="[0-9.-]">
    <input type="range" name="radius" v-model="radius" min="0" max="1000">

    <!-- <pre>{{GeoJSON}}</pre> -->

    <pre>
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "GeometryCollection",
      "geometry": {
        "type": "Circle",
        "coordinates": [
          {{ latitude }},
          {{ longitude }}
        ],
        "properties": {
          "radius": "{{ radius }}"
        }
      }
    }
  ]
}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'inputs',
  data() {
    return {
      msg: 'Insert coordinates and select radius',
      latitude: '52.5247258',
      longitude: '13.3930329',
      radius: '123',
      GeoJSON: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'GeometryCollection',
            geometry: {
              type: 'Circle',
              coordinates: [],
              properties: {
                radius: '',
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.o-inputs {
  display: flex;
  flex-direction: column;
}
input {
  padding: .8em;
  width: 100%;
  box-sizing: border-box;

  &+& {
    margin-top: 1em;
  }
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>
