import ProductOrder from './productOrder';
import User from './user';

interface Order {
  id: string;
  user: User;
  items: ProductOrder[];
  subTotalCost: number;
  shipCost: number;
  totalCost: number;
  date: number;
  address: string;
  note: string;
  firstName: string;
  lastName: string;
}

export default Order;
