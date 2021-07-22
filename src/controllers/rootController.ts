import { Request, Response } from 'express';
import { Product, Category, Motivation } from '../db';

const getAvailability = async (req: Request, res: Response) => {
  const [products, categories, motivations] = await Promise.all([
    Product.find().lean().exec(),
    Category.find().lean().exec(),
    Motivation.find().lean().exec()
  ]);

  const availability = {
    products: products,
    categories: categories,
    motivations: motivations
  };

  console.log(availability);
};

export default { getAvailability };
