import type { Mock } from 'vitest'
import type { Store, StoreDefinition } from 'pinia'

export function mockedStore<TStoreDef extends () => unknown>(
  useStore: TStoreDef
): TStoreDef extends StoreDefinition<infer Id, infer State, infer Getters, infer Actions>
  ? Store<
      Id,
      State,
      Getters,
      {
        [K in keyof Actions]: Actions[K] extends (...args: infer Args) => infer ReturnT
          ? Mock<Args, ReturnT>
          : Actions[K]
      }
    >
  : ReturnType<TStoreDef> {
  return useStore() as any
}


// import { http, HttpResponse } from 'msw'
// import { useProductStore } from '@/stores/productStore'

// const productStore = useProductStore()

// export const cart = [
//   http.get('/api/products', () => {
//     return HttpResponse.json(productStore.products)
//   }),
//   http.get('/api/totalProducts', () => {
//     return HttpResponse.json({ totalCountProducts: productStore.totalCountProducts })
//   }),
//   http.get('/api/cost', () => {
//     return HttpResponse.json({ subtotalCostProducts: productStore.subtotalCostProducts, saleCost: productStore.saleCost, deliveryCostProducts: productStore.deliveryCostProducts, totalCostProducts: productStore.totalCostProducts })
//   }),
// ]
