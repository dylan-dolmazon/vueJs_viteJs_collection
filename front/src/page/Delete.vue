<script>

import {deleteTome} from '../services/api'
export default{
    name: 'Delete',
    components: {},
    data: () => ({
        tome: Object
    }),
    methods: {
        
        async deleteTome(){
           
            await deleteTome(this.$route.params.number)
            this.$router.push("/");

        }
    },
    mounted(){
        this.deleteTome();
    }
}
</script>