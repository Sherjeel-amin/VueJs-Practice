<template>
  <div id="example-2">
    <button v-on:click="greet">Greet</button>
    <h2 v-if="show"> This is my name, and my name is Sherjeel</h2> 
    <h2 v-else>This is the else block of code executing</h2>
    <button v-on:click="display">Toggle</button>
    <!--v-show=true will show the h2 tag and will be condinally removed if the show is set as false and the else block is displayed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'HelloHandler.js',
      show: true
    };
  },
  methods: {
    greet(event) {
      alert('Hello ' + this.name + '!');
      if (event) {
        alert(event.target.tagName);
      }
    },
    display(){
        this.show = !this.show
    }
  }
};
</script>   

