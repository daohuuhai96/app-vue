<template>
    <div class="body">
      <Header />
      <div class="mt6">
        <h2>Information</h2>
        <div class="line-style mt-1"></div>
        <div class="flex">
          <p class="mr2">{{dataProducts.type}}</p>
          <p class="mr2">{{dataProducts.name}}</p>
          <p class="mr2">{{dataProducts.gender}}</p>
          <p class="mr2">{{dataProducts.age}}</p>
          <p class="mr2">{{dataProducts.colors.primary}}</p>
        </div>
        <h4>Description:</h4>
        <p>{{dataProducts.description}}</p>
        <div>
          <h2 class="mt3">Contact</h2>
          <div class="line-style mt-1"></div>
          <p class="mt2">Email: {{dataProducts.contact.email}}</p>
          <p class="mt2">Phone: {{dataProducts.contact.phone}}</p>
        </div>
        <h2 class="mt3">Photos</h2>
        <div class="line-style mt-1"></div>
        <div class="flex mt2">
          <div v-for="photo in dataProducts.photos" :key="photo.small">
            <img :src="photo.medium" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Header from '../Header.vue'

export default ({
  name: 'ProductDetail',
  components: {
    Header
  },
  data() {
    return {
      
    }
  },
  created () {
    this.getProFile()
  },
  computed: {
    dataProducts() {
      return this.$store.state.dataProducts.filter(animal=>Number(animal.id)===Number(this.$route.params.id))[0]
    }
  },
  methods: {
    ...mapActions(['getProFile'])
  },
})
</script>
<style scoped>
.mt6 {
  margin-top: 6em;
}
 .mt3 {
  margin-top: 3em;
 }
.mt2 {
  margin-top: 2em;
}
.mt1 {
  margin-top: 1em;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.mr2 {
  margin-right: 2em;
}
.body {
  line-height: 0;
}
.line-style {
  border-bottom: 2px solid gray;
}
</style>
