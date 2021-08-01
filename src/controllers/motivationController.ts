import { Motivation } from '../db';
import { Request, Response } from 'express';

export const getAllMotivations = (req: Request, res: Response) => {
  Motivation.find((err, motivatons) => {
    if (err) res.send(err);
    else res.send(motivatons);
  });
};

export const getMotivationById = (req: Request, res: Response) => {
  Motivation.findOne({ id: req.query.id }, (err: any, motivation: any) => {
    if (err) res.send(err);
    else res.send(motivation);
  });
};

export const addMotivation = (req: Request, res: Response) => {
  let motivation = new Motivation(req.body);
  console.log(req.body);
  motivation.save((err) => {
    if (err) res.send(err);
    else res.send('Successfully added the motivation');
  });
};

export const deleteMotivation = (req: Request, res: Response) => {
  Motivation.deleteOne({ id: req.query.id }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully deleted the motivation');
  });
};

export const updateMotivation = (req: Request, res: Response) => {
  console.log(req.body);
  Motivation.updateOne({ id: req.query.id }, req.body, { runValidators: true }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully updated the motivation');
  });
};

export default {
  getAllMotivations,
  getMotivationById,
  addMotivation,
  deleteMotivation,
  updateMotivation
};
