<template>
  <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id"></app-stock>
  </div>
</template>
<script>
import Stock from './Stock.vue'
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 200 },
        { id: 2, name: "Google", price: 350 },
        { id: 3, name: "Facebook", price: 210 },
        { id: 4, name: "Amazon", price: 530 }
      ]
    };
  },
  components:{
      appStock:Stock
  }
};
</script>