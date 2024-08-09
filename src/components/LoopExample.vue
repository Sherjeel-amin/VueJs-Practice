<template>
  <div>
    <h1>This is a loop component</h1>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td v-bind:style= "{color:'blue'}" >{{ user.name }}</td> 
          <!-- binding inline styling using v-bind -->  
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "LoopExample",
  data() {
    return {
      users: [
        { id: 1, name: "Sherjeel", address: "Shalimar" },
        { id: 2, name: "Momin", address: "Brein" },
        { id: 3, name: "Rouf", address: "Nishat" }
      ]
    };
  }
};
</script>