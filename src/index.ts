// src/index.ts
import { Elysia } from 'elysia';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import connectToDatabase from './services/tursoService'; // Import as default

dotenv.config();

const app = new Elysia();

productRoutes(app);

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(3000, () => {
      console.log('Server is running on port http://localhost:3000');
    });
  } catch (error) {
    console.error('Failed to start server due to database connection issue');
  }
};

startServer();
