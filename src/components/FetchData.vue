<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <p v-else>No posts available.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FetchData',
  data() {
    return {
      posts: [],
      error: null
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          this.error = 'Error fetching posts: ' + error.message;
          console.error(this.error);
        });
    }
  }
};

</script>

<style scoped>
h1 {
  font-size: 2em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 1em;
}
h2 {
  margin: 0;
}
p {
  margin: 0;
}
</style>









