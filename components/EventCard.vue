<template>
  <v-container>
    <v-row justify="center" align="center" class="mb-6">
      <v-card align="center">
        <v-img :src="require(`@/assets/${product.image}`)"></v-img>

        <v-card-text v-if="category"
          >{{ product.name }} &nbsp;&nbsp;&nbsp;&nbsp;{{
            product.price
          }}$</v-card-text
        >

        <v-btn @click="addToCart()">Add</v-btn>
        <v-btn @click="removeFromCart()">Remove</v-btn>
      </v-card>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
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
      this.eventStore.addToCart();
    },
    removeFromCart() {
      this.eventStore.removeFromCart();
    },
  },
};
</script>