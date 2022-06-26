import { defineStore } from 'pinia'
import axios from 'axios'
export const useEventStore = defineStore('EventStore', {
    state() {
        return {
            events: [],
            cart: [],
        }
    },
    actions: {
        fetchEvents(category) {
            return axios.get('http://localhost:3001/' + category).then(response => {
                this.events = response.data
            }).catch(error => {
                throw error
            })

        },
        addToCart() {
            let item = state.cart.find((i) => i.id === product.id);
            item = item ? cart[item.id]++ :

                this.cart++;
        },
        removeFromCart() {
            this.cart--;
        }
    }
})