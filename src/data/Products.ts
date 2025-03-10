import Product1 from '/src/assets/img/product1.png'
import Product2 from '/src/assets/img/product2.png'
import Product3 from '/src/assets/img/product3.png'
import Product4 from '/src/assets/img/product4.png'
import Product5 from '/src/assets/img/product5.png'
import Product6 from '/src/assets/img/product6.png'
import Product7 from '/src/assets/img/product7.png'
import Product8 from '/src/assets/img/product8.png'
import Product9 from '/src/assets/img/product9.png'
import Product10 from '/src/assets/img/product10.png'
import Product11 from '/src/assets/img/product11.png'
import Product12 from '/src/assets/img/product12.png'

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
    product_img: Product1,
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
    product_img: Product2,
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
    product_img: Product3,
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
    product_img: Product4,
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
    product_img: Product5,
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
    product_img: Product6,
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
    product_img: Product7,
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
    product_img: Product8,
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
    product_img: Product9,
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
    product_img: Product10,
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
    product_img: Product11,
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
    product_img: Product12,
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
    product_img: Product10,
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
    product_img: Product11,
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
    product_img: Product12,
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
    product_img: Product4,
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
    product_img: Product5,
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
    product_img: Product6,
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
    product_img: Product7,
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
    product_img: Product1,
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
    product_img: Product2,
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
    product_img: Product3,
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
    product_img: Product8,
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
    product_img: Product9,
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
    product_img: Product1,
    title: 'T-shirt with Tape Details',
    rating: 4.5,
    cost: 120,
    ratingModel: 4
  },
  {
    id: 2,
    product_img: Product2,
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    cost: 240,
    ratingModel: 3
  },
  {
    id: 3,
    product_img: Product3,
    title: 'Checkered Shirt',
    rating: 4.5,
    cost: 180,
    ratingModel: 4
  },
  {
    id: 4,
    product_img: Product4,
    title: 'Sleeve Striped T-Shirt',
    rating: 4.5,
    cost: 130,
    ratingModel: 4
  }
]

export const topSellingSlides = [
  {
    id: 5,
    product_img: Product5,
    title: 'Vertical Striped Shirt',
    rating: 5,
    cost: 212,
    ratingModel: 5
  },
  {
    id: 6,
    product_img: Product6,
    title: 'Courage Graphic T-shirt',
    rating: 4,
    cost: 145,
    ratingModel: 4
  },
  {
    id: 7,
    product_img: Product7,
    title: 'Loose Fit Bermuda Shorts',
    rating: 3,
    cost: 80,
    ratingModel: 3
  },
  {
    id: 8,
    product_img: Product8,
    title: 'Faded Skinny Jeans',
    rating: 4.5,
    cost: 210,
    ratingModel: 4
  }
]
