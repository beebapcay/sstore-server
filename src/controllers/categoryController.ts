import { Category } from '../db';
import { Request, Response } from 'express';

export const getAllCategory = (req: Request, res: Response) => {
  Category.find((err, categories) => {
    if (err) res.send(err);
    else res.send(categories);
  });
};

export const getCategoryById = (req: Request, res: Response) => {
  Category.findOne({ id: req.query.id }, (err: any, product: any) => {
    if (err) res.send(err);
    else res.send(product);
  });
};

export const addCategory = (req: Request, res: Response) => {
  let category = new Category(req.body);
  category.save((err) => {
    if (err) res.send(err);
    else res.send('Successfully added the category');
  });
};

export const deleteCategory = (req: Request, res: Response) => {
  Category.deleteOne({ id: req.query.id }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully deleted the category');
  });
};

export const updateCategory = (req: Request, res: Response) => {
  Category.updateOne({ id: req.query.id }, req.body, { runValidators: true }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully updated the category');
  });
};

export default { getAllCategory, getCategoryById, addCategory, deleteCategory, updateCategory };
