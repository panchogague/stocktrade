<template>
  <div class="container">
    <app-header></app-header>
    <div class="row" style="margin-top:30px">
      <div class="col-md-12">
         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    appHeader:Header
  }
}
</script>

<style>
  body{
    padding: 30px;
  }
</style>
