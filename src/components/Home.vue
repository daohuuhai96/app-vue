<template>
  <div id="app-project">
    <div class="body">
      <Header />
      <Product />
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import Product from './Product.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Product
  }
}
</script>
