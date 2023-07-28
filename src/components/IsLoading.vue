<template>
  <div class="product-container">
    <div class="product-thumbnail skeleton"></div>
    <div class="product-details">
      <div class="top">
        <h3 class="font-navy title skeleton"></h3>
        <div class="sub-title">
          <span class="skeleton"></span>
          <div class="rating">
            <div class="skeleton">
              <span></span>
            </div>
          </div>
        </div>
        <div class="description">
          <p class="skeleton"></p>
        </div>
      </div>
      <div class="bottom">
        <span class="font-navy price skeleton"></span>
        <div class="cta">
          <button type="button" class="bg-navy cta-buy skeleton"></button>
          <button type="button" class="border-navy font-navy cta-next skeleton"></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import '../assets/style/page.css';

export default {
  name: 'IsLoading',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skeleton {
  background-color: #f1f1f1;
  border-radius: 4px;
  min-height: 20px;
}

.title.skeleton {
  width: 60%;
}

.sub-title .skeleton {
  width: 40%;
  margin-top: 4px;
}

.rating .skeleton {
  width: 60px;
  height: 10px;
  display: flex;
  justify-content: space-between;
}

.description .skeleton {
  width: 80%;
  margin-top: 8px;
}

.price.skeleton {
  width: 40%;
}

.cta .skeleton {
  width: 100px;
  height: 30px;
  margin-top: 10px;
}

.cta-next .skeleton {
  width: 140px;
}

/* Animasi skeleton loading */
@keyframes skeleton-pulse {
  0% { opacity: 0.6; }
  50% { opacity: 0.8; }
  100% { opacity: 0.6; }
}

.skeleton {
  animation: skeleton-pulse 1s ease-in-out infinite;
}
</style>
