<template>
  <div class="section-product">
    <div class="product" v-for="dataProducts in dataProduct" :key="dataProducts.id">
      <router-link to="/ProductDetail">
        <img :src="(dataProducts.primary_photo_cropped)?dataProducts.primary_photo_cropped.small:''" alt="">
      </router-link>
      <div class="product-text">
        <p>{{dataProducts.name}}</p>
        <p>{{dataProducts.type}}</p>
        <p>{{dataProducts.age}}</p>
      </div>
      <router-link class="link-detail" to="/ProductDetail">Details.....</router-link>
    </div>
    <ProductDetail :dataProduct="dataProduct"></ProductDetail>
  </div>
</template>

<script>
import axios from 'axios'
import ProductDetail from './pages/ProductDetail.vue'

export default {
  name: 'Product',
  components : {
    ProductDetail,
  },
  data () {
    return {
      dataProduct : [],
    }
  },
  created () {
    this.getProFile()
  },
  methods: {
    async getProFile () {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://api.petfinder.com/v2/animals',
          headers : {
            Authorization : localStorage.getItem('jwt')
          }
        });
        console.log(typeof res.data.animals[0], res.data.animals[0])
        this.dataProduct = res.data.animals
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
  .section-product {
    width: 100%;
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
  }
  .product {
    width: 25%;
    margin-top: 40px;
  }
  img {
    width: 270px;
    height: 350px;
    object-fit: cover;
    border-radius: 10%;
  }
  .product-text {
    padding: 0 1em;
    margin-top: 10px;
    display: flex;
  }
  p {
    margin-right: 20px;
    line-height: 0;
    font-style: italic;
    font-weight: bold;
  }
  .link-detail {
    margin-top: 1em;
    margin-left: 1em;
  }
</style>