<template>
  <gmap-map
    :center="$root.center"
    :zoom="14"
    style="width: 100%; height: 100%"
    @click="updateCenter($event)"
  >

    <gmap-circle 
      :center="$root.center"
      :radius="$root.radius"
      :editable="false"
      :draggable="true"
      @drag="updateCenter($event)"
    ></gmap-circle>

  </gmap-map>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBYUdSdKShrOJ2prZV9C304bnYFieYLFm0',
  },
});

export default {
  name: 'maparea',
  data() {
    return {
    };
  },
  methods: {
    updateCenter(newCenter) {
      this.$root.center = {
        lat: newCenter.lat(),
        lng: newCenter.lng(),
      };
    },
  },
};

</script>