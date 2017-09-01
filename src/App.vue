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
  data() {
    return {
      latitude: '52.524474',
      longitude: '13.393001',
    };
  },
};
</script>

<style lang="scss">
body,html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;

  display: flex;
}

main {
  width: 75vw;
  height: 100vh;
}
aside {
  background-color: #d61f26;
  width: 25vw;
  min-width: 300px;
  padding: 2rem;
  box-sizing: content-box;

  &>*+* {
    margin-top: 2rem;
  }
}
</style>
