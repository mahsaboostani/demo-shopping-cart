<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-autocomplete
          v-model="category"
          :items="items"
          label="Category"
          @change="fetchData()"
        >
        </v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <EventCard
        v-for="item in eventStore.events"
        :key="item.id"
        :product="item"
        :category="category"
      />
    </v-row>
    <v-row v-for="item in eventStore.cart" :key="item.id">
      <v-col>
        <h4>{{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.quantity }}</h4>
      </v-col>
    </v-row>
  </v-container>
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
  components: { EventCard },
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
