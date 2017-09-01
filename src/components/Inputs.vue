<template>
  <div class="o-inputs">
    <h1>Insert point coordinate</h1>
    <input type="number" name="latitude" step="any" v-model="$root.latitude" placeholder="latitude" pattern="[0-9.-]">
    <input type="number" name="longitude" step="any" v-model="$root.longitude" placeholder="longitude" pattern="[0-9.-]">
    <h1>Select range</h1>
    <input type="range" name="radius" step="100" v-model="$root.radius" min="0" max="5000">
    <label>{{ $root.radius / 1000 }} Km</label>
  </div>
</template>

<script>

export default {
  name: 'inputs',
  data() {
    return {
    };
  },
};
</script>

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

pre {
  padding: 1rem;
  background-color: #fff;
  color: #2c3e50;
}
</style>
