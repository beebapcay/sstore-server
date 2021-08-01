import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Category, Motivation, Product } from '../models';

const generateCategories = () => {
  const categories: Category[] = [];
  const titles = ['All', 'Adidas', 'Air Jordan', 'Nike', 'Reebok', 'Converse', 'Vans', 'Puma'];
  let order = 0;

  titles.forEach((title) => {
    const category = {
      id: uuidv4(),
      title: title,
      order: order
    };

    order += 5;
    categories.push(category);
  });

  fs.writeFile('./src/dump/categories.json', JSON.stringify(categories), (err) => {
    if (err) throw err;
    console.log('Complete');
  });
};

const generateProducts = () => {
  const products: Product[] = Array.from(new Array(15)).map((item) => ({
    id: uuidv4(),
    name: '',
    description: '',
    category: '',
    stock: 0,
    sales: 0,
    price: 0,
    motivations: [],
    image: ''
  }));

  fs.writeFile('./src/dump/products.json', JSON.stringify(products), (err) => {
    if (err) throw err;
    console.log('Complete');
  });
};

const generateMotivations = () => {
  const motivations: Motivation[] = [];
  const titles = ['New Arrivals', 'Best Seller', 'Trending'];

  titles.forEach((title) => {
    const motivation = {
      id: uuidv4(),
      title: title
    };

    motivations.push(motivation);
  });

  fs.writeFile('./src/dump/motivations.json', JSON.stringify(motivations), (err) => {
    if (err) throw err;
    console.log('Complete');
  });
};

generateCategories();
