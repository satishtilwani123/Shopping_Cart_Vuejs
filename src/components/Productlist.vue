<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="product in getProducts" :key="product.id">
                <Products :ids="product.id" :image="product.image" :title="product.title" :price="product.price" :description="product.name" :item="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import Products from './Products.vue'
import { mapGetters } from "vuex"

export default {
    name: 'Productlist',
    components: {
        Products,
    },
    computed: {
        ...mapGetters(['getProducts'])
    } 
}
</script>

<style scoped>
.container
{
  margin-top: 5%;
}
</style>