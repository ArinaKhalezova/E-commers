export type TReview = {
  id: string
  title: string
  text: string
}

export type TCardReview = {
  id_product: string
  review: TReview[]
}
