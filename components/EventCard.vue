<template>
  <v-col cols="6" justify="center" align="center" class="mb-6">
    <v-card align="center">
      <v-img :src="require(`@/assets/${product.image}`)"></v-img>

      <v-card-text v-if="category"
        >{{ product.name }} &nbsp;&nbsp;&nbsp;&nbsp;{{
          product.price
        }}$</v-card-text
      >

      <v-btn @click="addToCart(product)">Add</v-btn>
      <v-btn @click="removeFromCart(product)">Remove</v-btn>
    </v-card>
  </v-col>
</template>
<script>
import { useEventStore } from "./../store/EventStore.js";
export default {
  setup() {
    const eventStore = useEventStore();
    return { eventStore };
  },
  name: "EventCard",
  props: ["product", "category"],
  methods: {
    addToCart() {
      this.eventStore.addToCart(this.product);
    },
    removeFromCart() {
      this.eventStore.removeFromCart(this.product);
    },
  },
};
</script>