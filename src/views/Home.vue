<template>
  <div class="paralax-mf bg-image">
        <div class="overlay-mf"></div>
  </div>
  <Productlist class="prodlist" />
</template>

<script>
import Productlist from '../components/Productlist.vue'

export default {
  name: 'Home',
  components: {
    Productlist,
  }
}
</script>

<style scoped>
.prodlist
{
  margin-top: -140px;
}
.paralax-mf
{
    position: relative;
    padding: 8rem 0;
    background: url(../assets/Images/daraz.jpg);
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
  /* background-color: black; */
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
</style>
