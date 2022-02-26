<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Daraz</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/businesschart">Business Charts</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="modal" data-target=".bd-example-modal-lg">{{ getQuantity }} Cart</button>
                <div @click="$event.stopPropagation()">
                    <MiniCart />
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
import MiniCart from './MiniCart.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'AppHeader',
    components: {
        MiniCart
    },
    computed: {
        ...mapGetters(['getQuantity'])
    }

}
</script>

<style scoped>

</style>