<script>
/*import axios from "axios";
const url="https://dog.ceo/api/breeds/image/random";
const getDog = ()=>{
    return axios.get(url).then( response=>{
        let image = response.data.message;
        document.getElementById("image").src=image;
    })
}
getDog();*/
import {getTomes} from '../services/api'
import Tome from '../components/Tome.vue'
export default{
    name: 'Accueil',
    components: { Tome },
    data: () => ({
        price: 0,
        tomes: []
    }),
    methods: {
        
        async getTomes(param) {
            const tomes = await getTomes(param);

            this.tomes = tomes;
            this.getAllPrice(this.tomes);
            console.log(this.tomes);
        },
       async orderById(){
           const tomes = await getTomes("id");
           this.tomes = tomes;
       },
       async orderByNumber(){
           const tomes = await getTomes("number");
           this.tomes = tomes;
       },
       async getAllPrice(tomes){
           for(let i = 0;i<tomes.length;i++){
               this.price += tomes[i].price;
               console.log(tomes[i].price);
           }
           
        }
    },
    mounted(){
        this.getTomes("number");
    }
}
</script>


<template>
    <h1>Ma Collection</h1>
    <h2>La collection coute {{this.price.toFixed(2)}}</h2>
    <div>
    <input type="radio" id="id" name="choose" value="Trier par date d'ajout" @click="orderById">
    <label for="id">Trier par date d'ajout</label>
    </div>
    <div>
    <input type="radio" id="tome" name="choose" value="Trier par tome" @click="orderByNumber">
    <label for="tome">Trier par tome</label>
    </div>
     <Tome
      v-for="tome in this.tomes"
      :key="tome.id"
      :tome="tome"
    />
</template>