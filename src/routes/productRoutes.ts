// src/routes/productRoutes.ts
import { Elysia } from 'elysia';
import { getAllProducts, createProduct } from '../controllers/productController';

export default (app: Elysia) => {
  app.get('/products', getAllProducts);
  app.post('/products', createProduct);
};
