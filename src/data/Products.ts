const product1_red = '/assets/images/product1_red.jpg'
const product1_green = '/assets/images/product1_green.jpg'
const product1_black = '/assets/images/product1_black.jpg'
const product2_blue = '/assets/images/product2_blue.jpg'
const product2_black = '/assets/images/product2_black.jpg'
const product3 = '/assets/images/product3.png'
const product4_orange = '/assets/images/product4_orange.jpg'
const product4_blue = '/assets/images/product4_blue.jpg'
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
    product_img: product1_black,
    title: 'T-shirt with Tape Details',
    rating: 4.5,
    cost: 120,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 't_shirts',
    gender: 'Men',
    style: 'casual',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            coverImage: product1_red,
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
            coverImage: product1_green,
            color: 'green',
            sku: 'TSHIRT-GREEN',
            sizes: [{ size: 'small', sku: 'TSHIRT-GREEN-S', availability: 'inStock' }]
          },
          {
            coverImage: product1_black,
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-BLACK-XS', availability: 'inStock' },
              { size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    product_img: product2_blue,
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    cost: 240,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and styl.',
    category: 'jeans',
    gender: 'Men',
    style: 'casual',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            coverImage: product2_blue,
            color: 'blue',
            sku: 'JEANS-BLUE',
            sizes: [{ size: 'xlarge', sku: 'JEANS-BLUE-XL', availability: 'inStock' }]
          },
          {
            coverImage: product2_black,
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
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'shirts',
    gender: 'Men',
    style: 'formal',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            coverImage: product3,
            color: 'lightBlue',
            sku: 'SHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'SHIRT-LB-XS', availability: 'inStock' },
              { size: 'small', sku: 'SHIRT-LB-S', availability: 'inStock' }
            ]
          },
          {
            coverImage: product3,
            color: 'black',
            sku: 'SHIRT-BLACK',
            sizes: [{ size: 'small', sku: 'SHIRT-BLACK-S', availability: 'inStock' }]
          },
          {
            coverImage: product3,
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
    product_img: product4_orange,
    title: 'Sleeve Striped T-Shirt',
    rating: 4.5,
    cost: 130,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 't_shirts',
    gender: 'Men',
    style: 'gym',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            coverImage: product4_orange,
            color: 'orange',
            sku: 'SHORTS-ORANGE',
            sizes: [
              { size: 'medium', sku: 'SHORTS-ORANGE-M', availability: 'inStock' },
              { size: 'large', sku: 'SHORTS-ORANGE-L', availability: 'inStock' }
            ]
          },
          {
            coverImage: product4_blue,
            color: 'lightBlue',
            sku: 'SHORTS-LIGHTBLUE',
            sizes: [{ size: 'medium', sku: 'SHORTS-LIGHTBLUE-M', availability: 'inStock' }]
          }
        ]
      }
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
    category: 'shirts',
    gender: 'Men',
    style: 'formal',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            coverImage: product5,
            color: 'purple',
            sku: 'SHIRT-PURPLE',
            sizes: [
              { size: 'medium', sku: 'SHIRT-PURPLE-M', availability: 'inStock' },
              { size: 'xlarge', sku: 'SHIRT-PURPLE-XL', availability: 'inStock' }
            ]
          },
          {
            coverImage: product5,
            color: 'red',
            sku: 'SHIRT-RED',
            sizes: [{ size: 'small', sku: 'SHIRT-RED-S', availability: 'inStock' }]
          },
          {
            coverImage: product5,
            color: 'white',
            sku: 'SHIRT-WHITE',
            sizes: [
              { size: 'xsmall', sku: 'SHIRT-WHITE-XS', availability: 'inStock' },
              { size: 'large', sku: 'SHIRT-WHITE-L', availability: 'inStock' }
            ]
          },
          {
            coverImage: product5,
            color: 'lightBlue',
            sku: 'SHIRT-LIGHTBLUE',
            sizes: [{ size: 'medium', sku: 'SHIRT-LIGHTBLUE-M', availability: 'inStock' }]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'party',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            coverImage: product6,
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [
              { size: 'large', sku: 'TSHIRT-BLACK-L', availability: 'inStock' },
              { size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }
            ]
          },
          {
            coverImage: product6,
            color: 'yellow',
            sku: 'TSHIRT-YELLOW',
            sizes: [
              { size: 'small', sku: 'TSHIRT-YELLOW-S', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-YELLOW-M', availability: 'inStock' }
            ]
          },
          {
            coverImage: product6,
            color: 'pink',
            sku: 'TSHIRT-PINK',
            sizes: [{ size: 'xsmall', sku: 'TSHIRT-PINK-XS', availability: 'inStock' }]
          },
          {
            coverImage: product6,
            color: 'green',
            sku: 'TSHIRT-GREEN',
            sizes: [{ size: 'large', sku: 'TSHIRT-GREEN-L', availability: 'inStock' }]
          }
        ]
      }
    ]
  },
  //так как далее не прописаны coverImage, то фотки не отображаются в большой карточке
  {
    id: 7,
    product_img: product7,
    title: 'Loose Fit Bermuda Shorts',
    rating: 3,
    cost: 80,
    ratingModel: 3,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 'shorts',
    gender: 'Men',
    style: 'casual',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'orange',
            sku: 'SHORTS-ORANGE',
            sizes: [
              { size: 'medium', sku: 'SHORTS-ORANGE-M', availability: 'inStock' },
              { size: 'large', sku: 'SHORTS-ORANGE-L', availability: 'inStock' }
            ]
          },
          {
            color: 'lightBlue',
            sku: 'SHORTS-LIGHTBLUE',
            sizes: [{ size: 'medium', sku: 'SHORTS-LIGHTBLUE-M', availability: 'inStock' }]
          }
        ]
      }
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
    category: 'jeans',
    gender: 'Men',
    style: 'party',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'purple',
            sku: 'JEANS-PURPLE',
            sizes: [{ size: 'large', sku: 'JEANS-PURPLE-L', availability: 'inStock' }]
          },
          {
            color: 'yellow',
            sku: 'JEANS-YELLOW',
            sizes: [
              { size: 'xsmall', sku: 'JEANS-YELLOW-XS', availability: 'inStock' },
              { size: 'medium', sku: 'JEANS-YELLOW-M', availability: 'inStock' }
            ]
          },
          {
            color: 'orange',
            sku: 'JEANS-ORANGE',
            sizes: [
              { size: 'medium', sku: 'JEANS-ORANGE-M', availability: 'inStock' },
              { size: 'large', sku: 'JEANS-ORANGE-L', availability: 'inStock' }
            ]
          },
          {
            color: 'lightBlue',
            sku: 'JEANS-LIGHTBLUE',
            sizes: [{ size: 'medium', sku: 'JEANS-LIGHTBLUE-M', availability: 'inStock' }]
          },
          {
            color: 'white',
            sku: 'JEANS-WHITE',
            sizes: [
              { size: 'large', sku: 'JEANS-WHITE-L', availability: 'inStock' },
              { size: 'xlarge', sku: 'JEANS-WHITE-XL', availability: 'inStock' }
            ]
          },
          {
            color: 'pink',
            sku: 'JEANS-PINK',
            sizes: [{ size: 'small', sku: 'JEANS-PINK-S', availability: 'inStock' }]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'party',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'green',
            sku: 'TSHIRT-GREEN',
            sizes: [{ size: 'medium', sku: 'TSHIRT-GREEN-M', availability: 'inStock' }]
          },
          {
            color: 'red',
            sku: 'TSHIRT-RED',
            sizes: [
              { size: 'small', sku: 'TSHIRT-RED-S', availability: 'inStock' },
              { size: 'large', sku: 'TSHIRT-RED-L', availability: 'inStock' }
            ]
          },
          {
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [{ size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }]
          },
          {
            color: 'lightBlue',
            sku: 'TSHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-LIGHTBLUE-XS', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-LIGHTBLUE-M', availability: 'inStock' }
            ]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'formal',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'green',
            sku: 'TSHIRT-GREEN',
            sizes: [{ size: 'medium', sku: 'TSHIRT-GREEN-M', availability: 'inStock' }]
          },
          {
            color: 'red',
            sku: 'TSHIRT-RED',
            sizes: [
              { size: 'small', sku: 'TSHIRT-RED-S', availability: 'inStock' },
              { size: 'large', sku: 'TSHIRT-RED-L', availability: 'inStock' }
            ]
          },
          {
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [{ size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }]
          },
          {
            color: 'lightBlue',
            sku: 'TSHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-LIGHTBLUE-XS', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-LIGHTBLUE-M', availability: 'inStock' }
            ]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'gym',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'orange',
            sku: 'TSHIRT-ORANGE',
            sizes: [{ size: 'xsmall', sku: 'TSHIRT-ORANGE-XS', availability: 'inStock' }]
          },
          {
            color: 'blue',
            sku: 'TSHIRT-BLUE',
            sizes: [
              { size: 'medium', sku: 'TSHIRT-BLUE-M', availability: 'inStock' },
              { size: 'large', sku: 'TSHIRT-BLUE-L', availability: 'inStock' }
            ]
          },
          {
            color: 'purple',
            sku: 'TSHIRT-PURPLE',
            sizes: [
              { size: 'small', sku: 'TSHIRT-PURPLE-S', availability: 'inStock' },
              { size: 'xlarge', sku: 'TSHIRT-PURPLE-XL', availability: 'inStock' }
            ]
          },
          {
            color: 'yellow',
            sku: 'TSHIRT-YELLOW',
            sizes: [{ size: 'large', sku: 'TSHIRT-YELLOW-L', availability: 'inStock' }]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'gym',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'lightBlue',
            sku: 'TSHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-LIGHTBLUE-XS', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-LIGHTBLUE-M', availability: 'inStock' }
            ]
          }
        ]
      }
    ]
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
    category: 't_shirts',
    gender: 'Men',
    quantity: 1,
    style: 'casual',
    aspects: [
      {
        variants: [
          {
            color: 'purple',
            sku: 'TSHIRT-PURPLE',
            sizes: [{ size: 'large', sku: 'TSHIRT-PURPLE-L', availability: 'inStock' }]
          },
          {
            color: 'yellow',
            sku: 'TSHIRT-YELLOW',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-YELLOW-XS', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-YELLOW-M', availability: 'inStock' }
            ]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'casual',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'orange',
            sku: 'TSHIRT-ORANGE',
            sizes: [
              { size: 'medium', sku: 'TSHIRT-ORANGE-M', availability: 'inStock' },
              { size: 'large', sku: 'TSHIRT-ORANGE-L', availability: 'inStock' }
            ]
          },
          {
            color: 'blue',
            sku: 'TSHIRT-BLUE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-BLUE-XS', availability: 'inStock' },
              { size: 'small', sku: 'TSHIRT-BLUE-S', availability: 'inStock' }
            ]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    style: 'casual',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [
              { size: 'large', sku: 'TSHIRT-BLACK-L', availability: 'inStock' },
              { size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }
            ]
          },
          {
            color: 'yellow',
            sku: 'TSHIRT-YELLOW',
            sizes: [
              { size: 'small', sku: 'TSHIRT-YELLOW-S', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-YELLOW-M', availability: 'inStock' }
            ]
          },
          {
            color: 'pink',
            sku: 'TSHIRT-PINK',
            sizes: [{ size: 'xsmall', sku: 'TSHIRT-PINK-XS', availability: 'inStock' }]
          },
          {
            color: 'green',
            sku: 'TSHIRT-GREEN',
            sizes: [{ size: 'large', sku: 'TSHIRT-GREEN-L', availability: 'inStock' }]
          }
        ]
      }
    ]
  },
  {
    id: 16,
    product_img: product4_orange,
    title: 'Sleeve Striped T-Shirt',
    rating: 4.5,
    cost: 130,
    ratingModel: 4,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    category: 't_shirts',
    gender: 'Men',
    style: 'casual',
    quantity: 1,
    aspects: [
      {
        variants: [
          {
            color: 'green',
            sku: 'TSHIRT-GREEN',
            sizes: [{ size: 'medium', sku: 'TSHIRT-GREEN-M', availability: 'inStock' }]
          },
          {
            color: 'red',
            sku: 'TSHIRT-RED',
            sizes: [
              { size: 'small', sku: 'TSHIRT-RED-S', availability: 'inStock' },
              { size: 'large', sku: 'TSHIRT-RED-L', availability: 'inStock' }
            ]
          },
          {
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [{ size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }]
          },
          {
            color: 'lightBlue',
            sku: 'TSHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-LIGHTBLUE-XS', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-LIGHTBLUE-M', availability: 'inStock' }
            ]
          }
        ]
      }
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
    category: 'shirts',
    gender: 'Men',
    quantity: 1,
    style: 'casual',
    aspects: [
      {
        variants: [
          {
            color: 'black',
            sku: 'TSHIRT-BLACK',
            sizes: [{ size: 'xlarge', sku: 'TSHIRT-BLACK-XL', availability: 'inStock' }]
          }
        ]
      }
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
    category: 't_shirts',
    gender: 'Men',
    quantity: 1,
    style: 'casual',
    aspects: [
      {
        variants: [
          {
            color: 'lightBlue',
            sku: 'TSHIRT-LIGHTBLUE',
            sizes: [
              { size: 'xsmall', sku: 'TSHIRT-LIGHTBLUE-XS', availability: 'inStock' },
              { size: 'medium', sku: 'TSHIRT-LIGHTBLUE-M', availability: 'inStock' }
            ]
          }
        ]
      }
    ]
  }
]

export const newArrivalsSlides = products.slice(0, 4)

export const topSellingSlides = products.slice(4, 8)
