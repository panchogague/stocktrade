<template>
  <div class="col-sm-6 col-md-4" style="padding: 10px">
    <div class="card">
      <div class="card-header text-success">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input type="number" class="form-control" 
          placeholder="Quantity" v-model="quantity"
          :class="{danger: insufficientFunds}"
          >
          <span class="input-group-addon" style="margin-left:5px">
            <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">
              {{insufficientFunds? 'Insufficient Funds' : 'Buy'}}</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger{
  border: 1px solid red;
}
</style>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed:{
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    },
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStock',order)
      this.quantity = 0;
    }
  }
};
</script>