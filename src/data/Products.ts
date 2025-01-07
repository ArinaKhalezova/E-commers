const product1 = '/assets/images/product1.png'
const product2 = '/assets/images/product2.png'
const product3 = '/assets/images/product3.png'
const product4 = '/assets/images/product4.png'
const product5 = '/assets/images/product5.png'
const product6 = '/assets/images/product6.png'
const product7 = '/assets/images/product7.png'
const product8 = '/assets/images/product8.png'
const product9 = '/assets/images/product9.png'
const product10 = '/assets/images/product10.png'
const product11 = '/assets/images/product11.png'
const product12 = '/assets/images/product12.png'

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
}

export const products = [
  {
    id: 1,
    product_img: product1,
    title: 'T-shirt with Tape Details',
    rating: 4.5,
    cost: 120,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'Black',
    quantity: 1
  },
  {
    id: 2,
    product_img: product2,
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    cost: 240,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Jeans',
    gender: 'Men',
    size: 'Small',
    color: 'Blue',
    quantity: 1
  },
  {
    id: 3,
    product_img: product3,
    title: 'Checkered Shirt',
    rating: 4.5,
    cost: 180,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Shirt',
    gender: 'Men',
    size: 'Large',
    color: 'Red',
    quantity: 1
  },
  {
    id: 4,
    product_img: product4,
    title: 'Sleeve Striped T-Shirt',
    rating: 4.5,
    cost: 130,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'X-Large',
    color: 'Orange',
    quantity: 1
  },
  {
    id: 5,
    product_img: product5,
    title: 'Vertical Striped Shirt',
    rating: 5,
    cost: 212,
    ratingModel: 5,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'Green',
    quantity: 1
  },
  {
    id: 6,
    product_img: product6,
    title: 'Courage Graphic T-shirt',
    rating: 4,
    cost: 145,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Small',
    color: 'Orange',
    quantity: 1
  },
  {
    id: 7,
    product_img: product7,
    title: 'Loose Fit Bermuda Shorts',
    rating: 3,
    cost: 80,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Shorts',
    gender: 'Men',
    size: 'Medium',
    color: 'Black',
    quantity: 1
  },
  {
    id: 8,
    product_img: product8,
    title: 'Faded Skinny Jeans',
    rating: 4.5,
    cost: 210,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Jeans',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 9,
    product_img: product9,
    title: 'Gradient Graphic T-shirt',
    rating: 3.5,
    cost: 145,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 10,
    product_img: product10,
    title: 'Polo with Tipping Details',
    rating: 4.5,
    cost: 180,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Polo',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 11,
    product_img: product11,
    title: 'Black Striped T-shirt',
    rating: 5.0,
    cost: 120,
    ratingModel: 5,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 12,
    product_img: product12,
    title: 'One Life Graphic T-shirt',
    rating: 4.5,
    cost: 260,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 13,
    product_img: product10,
    title: 'Polo with Tipping Details',
    rating: 4.5,
    cost: 180,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Polo',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 14,
    product_img: product11,
    title: 'Black Striped T-shirt',
    rating: 5.0,
    cost: 120,
    ratingModel: 5,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 15,
    product_img: product12,
    title: 'One Life Graphic T-shirt',
    rating: 4.5,
    cost: 260,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 16,
    product_img: product4,
    title: 'Sleeve Striped T-Shirt',
    rating: 4.5,
    cost: 130,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 17,
    product_img: product5,
    title: 'Vertical Striped Shirt',
    rating: 5,
    cost: 212,
    ratingModel: 5,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 18,
    product_img: product6,
    title: 'Courage Graphic T-shirt',
    rating: 4,
    cost: 145,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 19,
    product_img: product7,
    title: 'Loose Fit Bermuda Shorts',
    rating: 3,
    cost: 80,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Shorts',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 20,
    product_img: product1,
    title: 'T-shirt with Tape Details',
    rating: 4.5,
    cost: 120,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 21,
    product_img: product2,
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    cost: 240,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Jeans',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 22,
    product_img: product3,
    title: 'Checkered Shirt',
    rating: 4.5,
    cost: 180,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 23,
    product_img: product8,
    title: 'Faded Skinny Jeans',
    rating: 4.5,
    cost: 210,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'Jeans',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  },
  {
    id: 24,
    product_img: product9,
    title: 'Gradient Graphic T-shirt',
    rating: 3.5,
    cost: 145,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'T-shirt',
    gender: 'Men',
    size: 'Medium',
    color: 'White',
    quantity: 1
  }
]

export const newArrivalsSlides = [
  {
    id: 1,
    product_img: product1,
    title: 'T-shirt with Tape Details',
    rating: 4.5,
    cost: 120,
    ratingModel: 4
  },
  {
    id: 2,
    product_img: product2,
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    cost: 240,
    ratingModel: 3
  },
  {
    id: 3,
    product_img: product3,
    title: 'Checkered Shirt',
    rating: 4.5,
    cost: 180,
    ratingModel: 4
  },
  {
    id: 4,
    product_img: product4,
    title: 'Sleeve Striped T-Shirt',
    rating: 4.5,
    cost: 130,
    ratingModel: 4
  }
]

export const topSellingSlides = [
  {
    id: 5,
    product_img: product5,
    title: 'Vertical Striped Shirt',
    rating: 5,
    cost: 212,
    ratingModel: 5
  },
  {
    id: 6,
    product_img: product6,
    title: 'Courage Graphic T-shirt',
    rating: 4,
    cost: 145,
    ratingModel: 4
  },
  {
    id: 7,
    product_img: product7,
    title: 'Loose Fit Bermuda Shorts',
    rating: 3,
    cost: 80,
    ratingModel: 3
  },
  {
    id: 8,
    product_img: product8,
    title: 'Faded Skinny Jeans',
    rating: 4.5,
    cost: 210,
    ratingModel: 4
  }
]
