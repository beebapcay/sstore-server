import { Product } from '../db';
import { Request, Response } from 'express';

export const getAllProducts = (req: Request, res: Response) => {
  Product.find((err, products) => {
    if (err) res.send(err);
    else res.send(products);
  });
};

export const getProductById = (req: Request, res: Response) => {
  Product.findOne({ id: req.query.id }, (err: any, product: any) => {
    if (err) res.send(err);
    else res.send(product);
  });
};

export const addProduct = (req: Request, res: Response) => {
  let product = new Product(req.body);
  product.save((err) => {
    if (err) res.send(err);
    else res.send('Successfully added the product');
  });
};

export const deleteProduct = (req: Request, res: Response) => {
  Product.deleteOne({ id: req.query.id }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully deleted the product');
  });
};

export const updateProduct = (req: Request, res: Response) => {
  Product.updateOne({ id: req.query.id }, req.body, { runValidators: true }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully updated the product');
  });
};

export default { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct };
