<script>

import {addTome} from '../services/api'
export default{
    name: 'Add',
    components: {},
    data: () => ({
        tome: new Object
    }),
    methods: {
        async addTome() {
            const tome = await addTome(this.tome);
            this.tome = tome;
            this.$router.push("/")
        },
    },
}
</script>

<template>
    <h1>Ajouter un tome à la collection</h1>
    <form @submit.prevent="addTome">
        
        <div class="container">
        <label for="title">Titre du tome</label>
        <input type="text" name="title" id="title" v-model="tome.name">
        
        <label for="number">Tome n°</label>
        <input type="number" name="number" id="number" v-model="tome.number">
        
        <label for="image">Inserez le lien de l'image</label>
        <input type="text" name="image" id="image" v-model="tome.img">

        <label for="price">Prix du tome</label>
        <input type="number" id="price" name="price" step="0.01" v-model="tome.price">

        <label for="resume">Inserez un résumé</label>
        <textarea name="resume" id="resume" cols="30" rows="10" v-model="tome.resume"></textarea>

         <input type="submit" value="Submit">
         </div>
    </form>
</template>
