import type { HttpHandler } from 'msw'
import { catalog } from './catalog'
import { home } from './home'
import { productPage } from './productPage'
import { cart } from './cart'
import { orders } from './orders'

export const handlers: HttpHandler[] = [...catalog, ...home, ...productPage, ...cart, ...orders]
