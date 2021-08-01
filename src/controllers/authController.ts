import { User } from '../db';
import { Request, Response } from 'express';
import { User as UserModel } from '../models';
import { v4 as uuidv4 } from 'uuid';

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const users = (await User.find().lean().exec()) as UserModel[];
    let existingUser = users.find(
      (user) => (user.phone === username || user.email === username) && user.password === password
    );

    if (!existingUser) existingUser = {} as UserModel;
    res.send(existingUser);
  } catch (err) {
    res.send(err.message);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age, gender, email, phone, password } = req.body;
    console.log(req.body);
    const users = (await User.find().lean().exec()) as UserModel[];
    let existingUser = users.find((user) => user.phone === phone || user.email === email);

    if (existingUser) res.send('Register failed');
    else {
      const user: UserModel = {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        email: email,
        phone: phone,
        password: password,
        avatar: '',
        favourites: [],
        orders: []
      };

      new User(user).save((err) => {
        if (err) res.send(err);
        else res.send('Register successfully');
      });
    }
  } catch (err) {
    res.send(err.message);
  }
};

export default { login, register };
