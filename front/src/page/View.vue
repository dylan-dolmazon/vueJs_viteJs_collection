<script>

import {getTome} from '../services/api'
import Details from '../components/Details.vue'
export default{
    name: 'View',
    components: {  Details },
    data: () => ({
        tome: []
    }),
    methods: {
        async getTome() {
            const tome = await getTome(this.$route.params.number);

            this.tome = tome;
            console.log(this.tome.number);
        }
    },
    mounted(){
        this.getTome();
    }
}
</script>


<template>
    <h1>Présentation du tome</h1>
     <Details 
        :tome="tome"
     />
     
     <button class="bt"><router-link :to="'/Edit/'+tome.id">Modifier</router-link></button>
      <button class="bt"><router-link :to="'/delete/'+tome.id">Supprimer</router-link></button>

</template>
<style>
.bt {
  background-color: #000000;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}</style>