<template>
  <div id="app">
    <div class="body">
      <Header />
      <Product />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Product from './components/Product.vue'

export default {
  name: 'App',
  components: {
    Header,
    Product
  }
}
</script>

<style>
  #id {
    width: 100%;
  }
  .body {
    width: 80%;
    margin: auto;
  }
</style>
