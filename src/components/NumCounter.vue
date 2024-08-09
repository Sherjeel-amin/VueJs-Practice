<template>

    <div>
    <h1>{{counterName}}</h1>
    <h1>{{count}}</h1>
    <button v-on:click="increment()">Increment</button>
    <button v-on:click="decrement()">Decrement</button>
    <button v-on:click="reset()">Reset</button>
    </div>
    
</template>

<script>
export default {
    name : "NumCounter.vue",
    data (){
        return {
            count: 0,
            counterName: "The Clock"
        }
    },
    methods :{
        increment (){
            return this.count = this.count +1
        },
        decrement(){
            if(this.count >0){
            return this.count = this.count-1
            }
        },
        reset(){
            return this.count = 0
        }
    }
}
</script>