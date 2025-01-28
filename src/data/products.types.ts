export type Variant = {
  [color: string]: {
    sizes: string;
  };
};

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
  size?: string
  color?: string
  quantity: number
  variants: Variant[]
}