<template>
  <gmap-map
    :center="center"
    :zoom="14"
    style="width: 100%; height: 100%"
  >

    <gmap-circle 
      :center="center"
      :radius="radius"
      :editable="true"
      :draggable="true"
      @dragend="updateCenter($event)"
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
      center: {
        lat: this.$root.latitude,
        lng: this.$root.longitude },
      radius: this.$root.radius,
    };
  },
  methods: {
    updateCenter(polyCenter) {
      const point = polyCenter.getAt().getAt();
      this.edited = point;
    },
  },
};

</script>