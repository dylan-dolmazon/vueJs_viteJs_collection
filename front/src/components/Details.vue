<template>
    <div class="tome">
        <h1>{{ tome.name }}</h1>
        <h2>Tome n°{{tome.number}}</h2>
        <h3>Le prix est de {{tome.price}}€</h3>
        <img :src="source" width="600" height="930"/>
        <p>{{tome.resume}}</p>
    </div>
</template>
<script>


export default {
    name: 'Details',
    props: {
        tome: Object
    },
    computed: {
        source() {
            return this.tome.img;
        }
    },
    methods: {
       
    }
}
</script>
