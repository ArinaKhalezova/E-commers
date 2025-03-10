export type TProduct = {
  id: number
  product_img: string
  title: string
  rating?: number
  cost: number
  ratingModel?: number
  description?: string
  category?: string
  gender?: string
  quantity: number
  aspects: {
    variants: {
      color: string
      sku: string
      sizes: {
        size: string
        sku: string
        availability: string
      }[]
    }[]
  }[]
  sku: string
}

export type Variant = {
  color: string
  sizes: string
}

// export type TAspect = {
//   type: 'colorsMix' | 'textBar'
//   description: string
//   variants: TVariant[]
// }

// export type TVariant = {
//   color?: string
//   sku: string
//   sizes: TSize[]
// }

// export type TSize = {
//   size: string
//   sku: string
//   availability: 'inStock' | 'noSuchCombination' | 'lowStock'
// }

// export type TProduct = {
//   id: number
//   product_img: string
//   title: string
//   rating?: number
//   cost: number
//   ratingModel?: number
//   description?: string
//   category?: string
//   gender?: string
//   size?: string
//   color?: string
//   quantity: number
//   variants: Variant[]
// }

