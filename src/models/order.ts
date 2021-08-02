import Product from './product';
import User from './user';

interface Order {
  id: string;
  user: User;
  items: Product[];
  subTotalCost: number;
  shipCost: number;
  totalCost: number;
  date: number;
}

export default Order;
