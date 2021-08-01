import { Request, Response } from 'express';
import { Product, Category, Motivation } from '../db';

const getAvailability = async (req: Request, res: Response) => {
  try {
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

    res.send(availability);
  } catch (err) {
    res.send(err.message);
  }
};

export default { getAvailability };
