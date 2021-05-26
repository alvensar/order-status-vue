<template>
  <router-link 
  class="order-link"
  :to="{ name: 'OrderDetails', params: { id: order.id } }">
    <div class="order-card">
      <h4>{{ order.name }}</h4>
      <span>{{ order.time }} on {{ order.date }}</span>
      <p class="status">{{ order.status}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "OrderCard",
  props: {
    order: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.order-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.order-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.order-link {
  color: #2c3e50;
  text-decoration: none;
}

.status {
  color: red;
}
</style>
