<template>
  <div class="col-sm-6 col-md-4" style="padding: 10px">
    <div class="card">
      <div class="card-header text-info">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input type="number" class="form-control" 
          placeholder="Quantity" v-model="quantity"
           :class="{danger: insufficientQuantity}">
          <span class="input-group-addon" style="margin-left:5px">
            <button class="btn btn-info" @click="sellStock" 
            :disabled="insufficientQuantity || quantity <= 0">
            {{insufficientQuantity?'Not enough':'Sell'}}</button>
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
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed:{
    insufficientQuantity(){
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({placeSellOrder:"sellStock"}),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>