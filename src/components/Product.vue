<template>
  <div>
    <div v-if="status" class="section-product">
      <div class="product" v-for="dataProduct in dataProducts" :key="dataProduct.id">
        <router-link class="img-product" :to='/user/+ dataProduct.id'>
          <img :src="(dataProduct.primary_photo_cropped)?dataProduct.primary_photo_cropped.small:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqZnk_chuCsWR1Q8ZSv5HpB8lSHrqT-AsyA&usqp=CAU'" alt="">
        </router-link>
        <div class="product-text">
          <p>{{dataProduct.name}}</p>
          <p>{{dataProduct.type}}</p>
          <p>{{dataProduct.age}}</p>
        </div>
        <router-link class="link-detail" to="/ProductDetail">Details.....</router-link>
      </div>
    </div>
    <div v-else class="status">Vui lòng đăng nhập</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  created () {
    this.getProFile(this.$route.query.page, this.$route.query.limit)
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    dataProducts() {
      return this.$store.state.dataProducts
    }
  },
  methods: {
    ...mapActions(['getProFile'])
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
    justify-content: center;
    align-items: center;
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
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .status {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 3em;
  }
  
  .img-product{
  display: flex;
  justify-content: center;
  align-items: center;
  }
</style>