<template>
    <div class="paralax-mf bg-image">
        <div class="overlay-mf"></div>
        <div class="describe">
            <h1 class="display-4">Our Products</h1>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </div>
    <div class="container">
        <div class="row" v-for="product in getProducts" :key="product.id">
            <div class="col-sm-12">
                <div class="card" v-if="product.id == $route.params.id">
                    <div class="card-header">
                        About Product {{id}}
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <img class="col-sm-6 card-img" :src="Set_the_Image(product.image)" >
                            <div class="col-sm-6">
                                <h5 class="card-title">{{ product.title }}</h5>
                                <h5 class="card-text">${{ product.price }}</h5>
                                <button class="btn btn-primary"> ADD to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'Product',
    props: ['id'],
    data(){
        return{
        }
    },
    methods:{
        Set_the_Image(path){
            let imgs = require.context('../assets/Images/', false, /\.png$|\.jpg$/)
            return imgs("./"+path)
        },
    },
    computed:{
        ...mapGetters(['getProducts'])
    }
}
</script>

<style scoped>
.paralax-mf
{
    position: relative;
    padding: 8rem 0;
    background: url(../assets/Images/pizza_jumbotron.jpg);
    height: 500px;
}
.bg-image {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
@media (max-width: 1024px) {
  .bg-image {
    background-attachment: scroll;
  }
}
.overlay-mf {
  background-color: black;
}
.overlay-mf {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
}
.describe
{
    margin: 5%;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    text-shadow: 2px 2px black;
    position: absolute;
}
.card
{
    margin: 5%;
}
.card-img
{
    border-radius: 5%;
}
</style>