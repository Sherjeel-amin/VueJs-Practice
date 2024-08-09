<!-- src/components/ComponentC.vue -->
<template>
  <div>
    Component C
    <p>{{ greeting }}</p>
    {{greet()}}
  </div>
</template>

<script>
import { greetingMixin } from './GreetingMixin'; 

export default {
  name: 'ComponentC',
  mixins: [greetingMixin]
};
</script>
