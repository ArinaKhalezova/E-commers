// import type { TProduct } from '@/data/products'
// import { defineStore } from 'pinia'
// import {v4 as uuid4} from 'uuid'

// interface Cart {
//   cid: string
//   products: Array<{ id: number; qty: number }>
// }

// interface State {
//   cart: Cart | []
// }

// const useCartStore = defineStore('cart', {
//   state: () => ({ cart: [] }) as State,
//   actions: {
//     loadCartInstance() {
//       const cs = localStorage.getItem('cart')
//       if (!cs) {
//         this.cart = []
//       } else {
//         this.cart = JSON.parse(cs)
//       }
//     },
//     addToCart(product: { id: number; qty: number }) {
//       const cs = localStorage.getItem('cart')
//       if (!cs) {
//         this.cart = {
//           cid: uuid4()
//           products:[
//             product
//           ]
//         }
//       }
//       else {
//         let cartLocalStorage = JSON.parse(cs)
//         cartLocalStorage.products = cartLocalStorage.products.map(ci => {
//             if(ci == product.id) {
//                 return {id: ci.id, qty: ci.qty + 1}
//             }
//         })
//       }
//     }
//   }
// })
