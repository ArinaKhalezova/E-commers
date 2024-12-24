import type { HttpHandler } from 'msw'
import { catalog } from './catalog'
import { home } from './home'
import { productPage } from './productPage'
export const handlers: HttpHandler[] = [...catalog, ...home, ...productPage]
