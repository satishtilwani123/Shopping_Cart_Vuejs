<template>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                        <h5 class="modal-title">Shopping Cart</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <div class="px-2 d-flex justify-content-between mt-4" :key="product.id" v-for="product in getCartProducts">
                                <div class="float-left">
                                    <img :src="Set_the_Image(product.image)" class="cart-img">
                                    <br /><select class="select" v-model="product.quantity" @change="updateQuantity({qty: $event.target.value, index: product.id})">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select> X {{ product.price }}
                                </div>
                                <div class="float-right">
                                    <a href="#" class="badge badge-secondary" @click="removeItem(product.id)">remove</a>
                                </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                        <span>Total: ${{ getTotalPrice }} => Quantity({{ getQuantity }})</span>
                        <a href="#">Cleck Out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: 'MiniCart',
    methods: {
        Set_the_Image(path){
            let imgs = require.context('../assets/Images/', false, /\.png$|\.jpg$/)
            return imgs("./"+path)
        },
        ...mapActions(['removeItem', 'updateQuantity']),
    },
    computed: {
        ...mapGetters(['getCartProducts', 'getTotalPrice', 'getQuantity'])
    },
}
</script>

<style scoped>
.cart-img
{
    width: 20%;
}
#quantity
{
    width: 8%;
    text-align: center;
}
.select
{
    margin-top: 20px;
}
.modal-body
{
    overflow: scroll;
}
</style>