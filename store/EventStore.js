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
            return axios.get('https://my-json-server.typicode.com/mahsaboostani/demo-shopping-cart/' + category).then(response => {
                this.events = response.data
            }).catch(error => {
                throw error
            })

        },
        addToCart(product) {
            let item = this.cart.find((i) => i.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                this.cart.push({ id: product.id, name: product.name, quantity: 1 });
            }

        },
        removeFromCart(product) {
            let item = this.cart.find((i) => i.id === product.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    this.cart = this.cart.filter((i) => i.id !== product.id);

                }
            }
        }
    }
})