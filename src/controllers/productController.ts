// src/controllers/productController.ts
import { Request, Response } from 'elysia';
import tursoClient from '../services/tursoService';
import { Product } from '../models/product';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await tursoClient.query('SELECT * FROM products', []);
  res.send(products.rows);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price }: Product = req.body;
  const result = await tursoClient.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  const newProduct = result.rows[0];
  res.status(201).send(newProduct);
};
