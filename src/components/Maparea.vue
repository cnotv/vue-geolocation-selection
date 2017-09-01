<template>
  <map></map>
</template>

<script>
export default {
  name: 'maparea',
  data() {
    return {
      msg: 'Select a point',
    };
  },
  methods: {
    map: function initMap() {
      console.log('map');
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
