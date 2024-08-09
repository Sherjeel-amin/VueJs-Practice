<template>
  <div id="app">
    <h1>Signup Form</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="form.name" id="name" required>
      </div>
      
      <div>
        <label>Gender:</label>
        <label><input type="radio" v-model="form.gender" value="Male" required> Male</label>
        <label><input type="radio" v-model="form.gender" value="Female" required> Female</label>
      </div>
      
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" required>
      </div>
      
      <div>
        <label><input type="checkbox" v-model="form.terms" required> I agree to the terms and conditions</label>
      </div>
      
      <button type="submit">Signup</button>
    </form>
    
    <div v-if="submitted">
      <h2>Form Submitted</h2>
      <p>Name: {{ form.name }}</p>
      <p>Gender: {{ form.gender }}</p>
      <p>Email: {{ form.email }}</p>
      <p>Terms agreed: {{ form.terms ? 'Yes' : 'No' }}</p>
    </div>
  </div>
</template>

<script>
export default {
 name : "MakeForm.vue",
 data() {
    return {
      form: {
        name: '',
        gender: '',
        email: '',
        terms: false
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

#app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

form div {
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input[type="text"],
form input[type="email"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

form button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #218838;
}
</style>
