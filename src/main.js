// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data() {
    return {
      center: {
        lat: 52.524725554209105,
        lng: 13.393034040927887 },
      radius: 1000,
    };
  },
  props: {
    errorlat: {
      type: Boolean,
      default: false,
    },
    errorlng: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    missingNum() {
      return this.center.lat === '';
    },
    wrongLat() {
      return (
        this.isNumeric(this.center.lat) === false ||
        this.center.lat < -85 ||
        this.center.lat > 85
      );
    },
    wrongLng() {
      return (
        this.isNumeric(this.center.lng) === false ||
        this.center.lng < -180 ||
        this.center.lng > 180
      );
    },
  },
  methods: {
    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
  },
});
