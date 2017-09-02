<template>
  <div class="o-inputs">
    <h1>Insert point coordinate</h1>
    <input 
      type="number"
      name="latitude"
      step="0.000001"
      v-model.number="$root.center.lat"
      placeholder="latitude"
      pattern="[0-9.-]"
      min="-89.999999"
      max="89.999999"
    >
    <input
      type="number"
      name="longitude"
      step="0.000001"
      v-model.number="$root.center.lng"
      placeholder="longitude"
      pattern="[0-9.-]"
      min="-179.999999"
      max="179.999999"
    >

    <h1>Select range</h1>
    <input type="range" name="radius" step="100" v-model.number="$root.radius" min="0" max="5000">
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
