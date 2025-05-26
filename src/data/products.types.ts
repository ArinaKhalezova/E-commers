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
  style?: string
  quantity: number
  aspects: {
    variants: {
      coverImage?: string
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

