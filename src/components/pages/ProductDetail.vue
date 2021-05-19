<template>
    <div>
        <div class="product" v-for="dataProducts in dataProduct" :key="dataProducts.id">
      <div class="product-text">
        <p>{{dataProducts.name}}</p>
        <p>{{dataProducts.type}}</p>
        <p>{{dataProducts.age}}</p>
      </div>
    </div>
    </div>
</template>
<script>

export default ({
    name: 'ProductDetail',
    props: ['dataProduct']
})
</script>
