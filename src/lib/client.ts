import { treaty } from '@elysiajs/eden'
import type { app } from '../app/api/[[...slugs]]/route'


export const client = treaty<app>('localhost:3000').api
const res = client.user.get()