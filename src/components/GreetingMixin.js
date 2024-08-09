export const greetingMixin = {
  data() {
    return {
      greeting: 'Hello, Welcome to Vue.js!'
    };
  },
  methods: {
    greet() {
      console.log(this.greeting);
    }
  }
};