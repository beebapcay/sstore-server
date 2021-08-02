import express from 'express';
import { Order as OrderModel } from '../models';
import { Order } from '../db';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.query.id;
    const orders = (await Order.find().lean().exec()) as OrderModel[];

    const ordersOfUser = orders.filter((order) => order.user.id === userId);
    if (ordersOfUser) res.send(ordersOfUser);
    else res.send({} as OrderModel);
  } catch (err) {
    res.send(err.message);
  }
};

export const saveOrder = (req: Request, res: Response) => {
  try {
    const order = req.body as OrderModel;
    console.log(req.body);
    order.id = uuidv4();
    order.date = Date.now();

    new Order(order).save((err) => {
      if (err) res.send(err);
      else res.send('Save order successfully');
    });
  } catch (err) {
    res.send(err.message);
  }
};

export default { getOrdersByUserId, saveOrder };
