<template>
  <div class="o-inputs">
    <h1>Insert point coordinate</h1>
    <input 
      type="number"
      name="latitude"
      step="any"
      v-model.number="$root.center.lat"
      placeholder="latitude"
      pattern="[0-9.-]"
      min="-85"
      max="85"
    >
    <span v-if="$root.wrongLat" class="o-inputs__feedback">Please insert a number between -85 and 85</span>

    <input
      type="number"
      name="longitude"
      step="any"
      v-model.number="$root.center.lng"
      placeholder="longitude"
      pattern="[0-9.-]"
      min="-180"
      max="180"
    >
    <span v-if="$root.wrongLng" class="o-inputs__feedback">Please insert a number between -180 and 180</span>

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

  &__feedback {
  }
}

input {
  position: relative;
  padding: .8em;
  width: 100%;
  box-sizing: border-box;

  &:nth-of-type(n+2) {
    margin-top: 1em;
  }

  &:-moz-submit-invalid,
  &:-moz-ui-invalid,
  &:invalid {
    color: red;
    text-decoration: underline;
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
