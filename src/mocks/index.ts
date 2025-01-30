import type { HttpHandler } from 'msw'
import { catalog } from './catalog'
import { home } from './home'
import { productPage } from './productPage'
import { cart } from './cart'


export const handlers: HttpHandler[] = [
  ...catalog, 
  ...home, 
  ...productPage, 
  ...cart
]
