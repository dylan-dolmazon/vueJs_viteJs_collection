<script>

import {getTome, updateTome} from '../services/api'
export default{
    name: 'View',
    components: {},
    data: () => ({
        tome: Object
    }),
    methods: {
        async getTome() {
            const tome = await getTome(this.$route.params.number);

            this.tome = tome;
            console.log(this.tome);
        },
        async updateTome(){
           
            await updateTome(this.tome,this.$route.params.number)
            this.$router.push("/")

        }
    },
    mounted(){
        this.getTome();
    }
}
</script>

<template>

      <h1>Modifier le tome</h1>
     

      <div class="container">
  <form @submit.prevent="updateTome">

    <label for="title">Titre</label>
    <input type="text" id="title" name="title" v-model="tome.name">

    <label for="number">Numéro du tome</label>
    <input type="number" id="number" name="number" v-model="tome.number">

    <label for="img">Lien de l'image</label>
    <input type="text" id="img" name="img" v-model="tome.img">

    <label for="price">Prix du tome</label>
    <input type="number" id="price" name="price" step="0.01" v-model="tome.price">

    <label for="resume">Resumé</label>
    <textarea id="resume" name="resume" v-model="tome.resume" style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div> 
     


</template>
<style>
    input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
input[type=number], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>