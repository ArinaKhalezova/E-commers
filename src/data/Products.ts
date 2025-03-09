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
    quantity: 1,
    // variants: [
    //   { color: 'red', sizes: ['xsmall', 'large', 'medium'] },
    //   { color: 'yellow', sizes: ['xlarge'] },
    //   { color: 'pink', sizes: ['large'] },
    //   { color: 'white', sizes: ['medium', 'xlarge'] }
    // ]
    aspects: [
      {
        variants: [
          {
            color: 'red',
            sku: 'TSHIRT-RED',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-RED-XS', availability: 'inStock' },
              { size: 'small', sku: 'TSHIRT-RED-S', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-RED-M', availability: 'inStock' },
              { size: 'large', sku: 'TSHIRT-RED-L', availability: 'inStock' }
            ]
          },
          {
            color: 'pink',
            sku: 'TSHIRT-PINK',
            sizes: [{ size: 'small', sku: 'TSHIRT-PINK-S', availability: 'inStock' }]
          },
          {
            color: 'white',
            sku: 'TSHIRT-WHITE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-WHITE-XS', availability: 'inStock' },
              { size: 'xlarge', sku: 'TSHIRT-RED-XL', availability: 'inStock' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    product_img: product2,
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    cost: 240,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and styl.',
    category: 'Jeans',
    gender: 'Men',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'red',
            sku: 'JEANS-RED',
            sizes: [
              { size: 'xsmall', sku: 'JEANS-RED-XS', availability: 'inStock' },
              { size: 'medium', sku: 'JEANS-RED-M', availability: 'inStock' },
              { size: 'large', sku: 'JEANS-RED-L', availability: 'inStock' }
            ]
          },
          {
            color: 'yellow',
            sku: 'JEANS-YELLOW',
            sizes: [{ size: 'xlarge', sku: 'JEANS-YELLOW-XL', availability: 'inStock' }]
          },
          {
            color: 'black',
            sku: 'JEANS-BLACK',
            sizes: [{ size: 'oneSize', sku: 'JEANS-BLACK-OS', availability: 'inStock' }]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    product_img: product3,
    title: 'Checkered Shirt',
    rating: 4.5,
    cost: 180,
    ratingModel: 4,
    description: 'This graphic t-shirt...',
    category: 'Shirt',
    gender: 'Men',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'lightBlue',
            sku: 'SHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'SHIRT-LB-XS', availability: 'inStock' },
              { size: 'small', sku: 'SHIRT-LB-S', availability: 'inStock' }
            ]
          },
          {
            color: 'black',
            sku: 'SHIRT-BLACK',
            sizes: [{ size: 'small', sku: 'SHIRT-BLACK-S', availability: 'inStock' }]
          },
          {
            color: 'pink',
            sku: 'SHIRT-PINK',
            sizes: [{ size: 'oneSize', sku: 'SHIRT-PINK-OS', availability: 'inStock' }]
          }
        ]
      }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'pink', sizes: ['xlarge'] },
      { color: 'orange', sizes: ['small', 'medium'] },
      { color: 'green', sizes: ['large'] },
      { color: 'blue', sizes: ['xsmall', 'large'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'purple', sizes: ['medium', 'xlarge'] },
      { color: 'red', sizes: ['small'] },
      { color: 'white', sizes: ['xsmall', 'large'] },
      { color: 'lightBlue', sizes: ['medium'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'black', sizes: ['large', 'xlarge'] },
      { color: 'yellow', sizes: ['small', 'medium'] },
      { color: 'pink', sizes: ['xsmall'] },
      { color: 'green', sizes: ['large'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'orange', sizes: ['medium', 'large'] },
      { color: 'lightBlue', sizes: ['medium'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'purple', sizes: ['large'] },
      { color: 'yellow', sizes: ['xsmall', 'medium'] },
      { color: 'orange', sizes: ['medium', 'large'] },
      { color: 'lightBlue', sizes: ['medium'] },
      { color: 'white', sizes: ['large', 'xlarge'] },
      { color: 'pink', sizes: ['small'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'green', sizes: ['medium'] },
      { color: 'red', sizes: ['small', 'large'] },
      { color: 'black', sizes: ['xlarge'] },
      { color: 'lightBlue', sizes: ['xsmall', 'medium'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'green', sizes: ['medium'] },
      { color: 'red', sizes: ['small', 'large'] },
      { color: 'black', sizes: ['xlarge'] },
      { color: 'lightBlue', sizes: ['xsmall', 'medium'] }
    ]
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
    size: '',
    color: '',
    quantity: 1,
    variants: [
      { color: 'orange', sizes: ['xsmall'] },
      { color: 'blue', sizes: ['medium', 'large'] },
      { color: 'purple', sizes: ['small', 'xlarge'] },
      { color: 'yellow', sizes: ['large'] }
    ]
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
    quantity: 1,
    variants: [{ color: 'lightBlue', sizes: 'xsmall, medium' }]
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
    quantity: 1,
    variants: [
      { color: 'purple', sizes: 'large' },
      { color: 'yellow', sizes: 'xsmall, medium' }
    ]
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
    quantity: 1,
    variants: [
      { color: 'orange', sizes: 'medium, large' },
      { color: 'blue', sizes: 'xsmall, small' }
    ]
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
    quantity: 1,
    variants: [
      { color: 'black', sizes: 'large, xlarge' },
      { color: 'yellow', sizes: 'small, medium' },
      { color: 'pink', sizes: 'xsmall' },
      { color: 'green', sizes: 'large' }
    ]
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
    quantity: 1,
    variants: [
      { color: 'black', sizes: 'large, xlarge' },
      { color: 'yellow', sizes: 'small, medium' },
      { color: 'pink', sizes: 'xsmall' },
      { color: 'green', sizes: 'large' }
    ]
  },
  {
    id: 17,
    product_img: product9,
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
    quantity: 1,
    variants: [
      { color: 'black', sizes: 'large, xlarge' },
      { color: 'green', sizes: 'large' }
    ]
  },
  {
    id: 18,
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
    quantity: 1,
    variants: [
      { color: 'black', sizes: 'large, xlarge' },
      { color: 'yellow', sizes: 'small, medium' },
      { color: 'pink', sizes: 'xsmall' },
      { color: 'green', sizes: 'large' }
    ]
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
