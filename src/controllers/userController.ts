import { User } from '../db';
import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  User.find((err, users) => {
    if (err) res.send(err);
    else res.send(users);
  });
};

export const getUserById = (req: Request, res: Response) => {
  User.findOne({ id: req.query.id }, (err: any, user: any) => {
    if (err) res.send(err);
    else res.send(user);
  });
};

export const addUser = (req: Request, res: Response) => {
  let user = new User(req.body);
  user.save((err) => {
    if (err) res.send(err);
    else res.send('Successfully added the user');
  });
};

export const deleteUser = (req: Request, res: Response) => {
  User.deleteOne({ id: req.query.id }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully deleted the user');
  });
};

export const updateUser = (req: Request, res: Response) => {
  User.updateOne({ id: req.query.id }, req.body, { runValidators: true }, (err) => {
    if (err) res.send(err);
    else res.send('Successfully updated the user');
  });
};

export default { getAllUsers, getUserById, addUser, deleteUser, updateUser };
