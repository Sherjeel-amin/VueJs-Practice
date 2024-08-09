<template>
  <div>
     <h1>{{ data }}</h1>
    <h1>{{ msg }}</h1>
    <p><br><br><br></p>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reverse }}"</p>
    </div>
    <p v-html="rowHtml"></p>
    <!-- Using v-html to include HTML from the property -->
    <h1>{{ fullName }}</h1>
    <h4 v-once>by {{ username }}</h4>
    <!-- v-once will not let the username change -->
    <h4>by {{ username }}</h4>
    <!-- This will change with username -->
    <button v-on:click="updateText">Click me!</button>
  </div>
</template>

<script>
export default {
  name: "HelloHome",
  props: {
    data: String,
    msg: String,
  },
  data() {
    return {
      username: "Sherjeel",
      rowHtml:
        "<h1>This is a message from The Home Component which is in a property</h1>",
      firstName: "Momin",
      lastName: "Shafi",
      message: "my name is momin shafi",
    };
  },
  methods: {
    updateText() {
      this.username = this.username === "Sherjeel" ? "Amin" : "Sherjeel";
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    reverse() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
