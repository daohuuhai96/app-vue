<template>
  <div class="section-product">
    <div class="product" v-for="dataProducts in dataProduct" :key="dataProducts.id">
      <p> {{dataProducts.id}} </p>
      <!-- <div v-for="photo in dataProducts.photos" :key="photo.id">
        <img :src="photo.medium" alt="">
      </div> -->
      <p>{{dataProducts.breeds.secondary}}</p>
      <img :src="photo.medium" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  data () {
    return {
      dataProduct : [],
      photo: {},
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
        console.log(res.data.animals)
        this.dataProduct = res.data.animals
        console.log(typeof this.photo)
        this.photo = res.data.animals.primary_photo_cropped
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
  .section-product {
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
  }
  .product {
    width: 25%;
  }
</style>