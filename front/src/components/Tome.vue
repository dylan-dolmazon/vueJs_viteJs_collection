<template>
    <div class="tome">
        <h1><router-link :to="'/view/'+tome.id">{{ tome.name }}</router-link></h1>
        <h2>Tome n°{{tome.number}}</h2>
        <img :src="source" width="430" height="700"/>
        
    </div>
</template>
<script>


export default {
    name: 'Tome',
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
