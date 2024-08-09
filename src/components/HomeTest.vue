<template>
<div>
    <h1>This is a Home Component</h1>
    <button v-on:mouseover="Hello('HoverMagic')"> Click me!</button>
    <br><br><br><br>
    <button v-on:click="Hello('ClickMagic')"> Click me!</button>

    </div>
</template>

<script>
export default {
    name : "HomeTest",

    methods:{
        Hello(data)
        {
            alert(data)
        }
    }
}
</script>