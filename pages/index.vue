<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-autocomplete
        v-model="category"
        :items="items"
        label="Category"
        @change="fetchData()"
      >
      </v-autocomplete>
      <EventCard
        v-for="item in eventStore.events"
        :key="item.id"
        :product="item"
        :category="category"
      />
      <h1>Cart:{{ eventStore.cart }}</h1>
    </v-col>
  </v-row>
</template>

<script>
import { useEventStore } from "./../store/EventStore.js";
import EventCard from "@/components/EventCard.vue";
export default {
  setup() {
    const eventStore = useEventStore();
    return { eventStore };
  },
  name: "IndexPage",
  components: [EventCard],
  data: () => ({
    items: ["food", "fruit", "bread", "diary"],
    category: "",
  }),
  methods: {
    fetchData() {
      this.eventStore.fetchEvents(this.category);
    },
  },
};
</script>
