<template>
    <div class="card" style="">
        <img class="card-img-top" :src="Set_the_Image(image)" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title"><router-link :to="{ name:'Product', params:{id: ids} }">{{ title }}</router-link><strong class="price">${{ price }}</strong></h5>
            <p class="card-text">{{ description }}</p>
            <a href="#" class="btn btn-primary" @click="addItem(item)">ADD TO CART</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Products',
    props: ['image', 'title', 'price', 'description', 'item', 'ids'],
    methods:{
        Set_the_Image(path){
            let imgs = require.context('../assets/Images/', false, /\.png$|\.jpg$/)
            return imgs("./"+path)
        },
        ...mapActions(['addItem'])
    },
}
</script>

<style scoped>
.price
{
    float: right;
}
.card img
{
    width: 100%;
    height: 200px;
}
.card
{
    height: 420px;
    margin-top: 7%;
}
.card-body .btn
{
    bottom: 0px;
    left: 0px;
    position: absolute;
    margin: 5%;
}
</style>