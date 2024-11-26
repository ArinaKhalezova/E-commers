import { defineStore } from "pinia";
import {products} from "@/data/products"

export const  useCartStore = defineStore("cartStore", {
    state: () => ({
        products: []
    }),
    actions: {
        async getProducts(id: number){
            const res = await fetch(`$(product)$(id)`)
            const data = await res.json()
        }

    }
})