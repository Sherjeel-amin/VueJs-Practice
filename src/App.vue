<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HelloHome data ="This is Sherjeel" msg="And this controller is owned by me"/>
    <HelloHome /> -->
    <!-- <HomeTest /> -->
    <!-- <LifecycleHooks /> -->
    <!-- <HelloHandler /> -->
    <!-- <LoopExample /> -->
    <!-- <MakeForm /> -->
    <ParentAbc />
    <FetchData />
    <NumCounter />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloHome from './components/HelloHome.vue'
// import HomeTest from './components/HomeTest.vue'
// import LifecycleHooks from './components/LifecycleHooks.vue'
// import HelloHandler from './components/HelloHandler.vue'
// import LoopExample from './components/LoopExample.vue'
// import MakeForm from './components/MakeForm.vue'
import ParentAbc from './components/ParentAbc.vue'
import FetchData from './components/FetchData.vue'
import NumCounter from './components/NumCounter.vue'

export default {
  name: 'App',
  components: {
    ParentAbc,
    FetchData,
    NumCounter
    // HomeTest,
    // LifecycleHooks,
    // HelloHandler,
    // LoopExample,
    // MakeForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
