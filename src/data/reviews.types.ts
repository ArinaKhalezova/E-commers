export type TReview = {
  id: number
  title: string
  text: string
  ratingModel: number
};

// export type TCardReview = {
//   id_product: number
//   id: number
//   title: string
//   text: string
//   ratingModel: number
// }

export type TCardReview = {
  id_product: number
  review: TReview[]
}
