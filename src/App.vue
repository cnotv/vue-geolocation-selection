<template>
  <div id="app">
    <main>
      <maparea></maparea>
    </main>
    <aside>
      <inputs></inputs>
    </aside>
  </div>
</template>

<script>
import Maparea from './components/Maparea';
import Inputs from './components/Inputs';

export default {
  name: 'app',
  components: {
    Maparea,
    Inputs,
  },
};
</script>

<style lang="scss">
body,html {
  margin: 0;
  padding: 0;
  // overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
}

main {
  width: 75vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: content-box;
}
aside {
  // overflow-y: scroll;
  // height: 100vh;
  background-color: #f1f1f1;
  width: 25vw;
  min-width: 300px;
  padding: 2rem;
  box-sizing: content-box;

  &>*+* {
    margin-top: 2rem;
  }
}
</style>
