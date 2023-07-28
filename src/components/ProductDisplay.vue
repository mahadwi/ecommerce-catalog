<template>
  <div class="container">
    <div class="container" :class="background">
      <div class="overlay">
        <img src="../assets/img/bg-shape.29c2da3c.svg" alt="background overlay">
      </div>
      <div class="card" v-if="isLoading">
        <is-loading />
      </div>
      <div class="card" v-else-if="background === 'bg-gray'">
        <div class="product-unavailable-container">
          <div class="overlay">
            <img src="../assets/img/bg-sad.ca9077ed.svg" alt="background overlay">
          </div>
          <div class="product-details">
            <p>This product is unavailable to show</p>
            <div class="cta">
              <button @click="nextProduk" type="button" class="cta-next">Next Product</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card" v-else>
        <div class="product-container">
          <div class="product-thumbnail">
            <img :src="produk.image" :alt="produk.title">
          </div>
          <div class="product-details">
            <div class="top">
              <h3 class="font-navy title">{{ produk.title }}</h3>
              <div class="sub-title">
                <span>{{ produk.category }}</span>
                <div class="rating">
                  <div v-if="produk && produk.rating">
                    <span>{{ produk.rating.rate }}/5</span>
                  </div>
                  <div class="rating">
                    <span class="bg-navy circle"></span>
                    <span class="bg-navy circle"></span>
                    <span class="bg-navy circle"></span>
                    <span class="bg-navy circle"></span>
                    <span class="bg-navy circle"></span>
                  </div>
                </div>
              </div>
              <div class="description">
                <p>{{ produk.description }}</p>
              </div>
            </div>
            <div class="bottom">
              <span class="font-navy price">${{ produk.price }}</span>
              <div class="cta">
                <button type="button" class="bg-navy cta-buy">Buy Now</button>
                <button @click="nextProduk" type="button" class="border-navy font-navy cta-next">Next Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProduct, getProducts } from '../repository/productRepository';
import '../assets/style/page.css';
import IsLoading from '../components/IsLoading.vue';

export default {
  name: 'ProductDisplay',
  components: {
    IsLoading,
  },

  data() {
    return {
      background: '',
      produk: {},
      isLoading: false,
      next: 1,
      dataLength: '',
    }
  },

  methods: {
    async getProducts(){
      const response = await getProducts();
      this.dataLength = response.length;
    },

    async getProductById(id) {
      try {   
        this.isLoading = true;
        const response = await getProduct(id);
        this.isLoading = false;

        // Jika respons API mengandung data, tambahkan logika increment
        if(response.category === "men's clothing"){
          this.background = 'bg-blue';
        }else if (response.category === "women's clothing") {
          this.background = 'bg-pink';
        }else {
          this.background = 'bg-gray';
        }
        this.next = (this.next % this.dataLength) + 1;
       
        this.produk = response;
      } catch (error) {
        console.log(error);
      }
    },

    nextProduk() {
      this.getProductById(this.next);
    }
  },

  async mounted() {
    await this.getProducts();
    this.getProductById(this.next);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
