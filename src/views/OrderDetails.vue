<template>
  <div v-if="order">
    <h1>{{ order.title }}</h1>
    <p>{{ order.time }} on {{ order.date }} @ {{ order.location }}</p>
    <p>{{ order.description }}</p>
  </div>
</template>

<script>
import OrderService from '@/services/OrderService.js'

export default {
  props: ["id"],  
  data() {
    return {
      order: null,
    }
  },
  created() {
    OrderService.getOrder(this.id)
      .then(response => {
        this.order = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>