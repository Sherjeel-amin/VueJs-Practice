<template>
  <div>
    <button v-on:click="setComponent('ComponentA')">Show Component A</button>
    <button v-on:click="setComponent('ComponentB')">Show Component B</button>
    <button v-on:click="setComponent('ComponentC')">Show Component C</button>

    <!-- Conditionally render the component -->
    <component :is="currentComponent" v-if="currentComponent"></component>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'ParentAbc',
  data() {
    return {
      currentComponent: null, // Initially no component is set //
      componentMap: {
        ComponentA: () => import('./ComponentA.vue'),
        ComponentB: () => import('./ComponentB.vue'),
        ComponentC: () => import('./ComponentC.vue')
      }
    };
  },
  methods: {
    async setComponent(name) {
      this.currentComponent = null; // Show loading state
      try {
        const component = await this.componentMap[name](); // Dynamically import the component
        this.currentComponent = component.default || component; // Set the loaded component
      } catch (error) {
        console.error('Failed to load component', error);
        this.currentComponent = null; // Optionally handle error state
      }
    }
  },
  mounted() {
    setTimeout(()=>{
         this.setComponent('ComponentA'); // Load ComponentA on page load after an interval of one second
    },1900)
  }
}
</script>
