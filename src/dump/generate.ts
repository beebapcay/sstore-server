import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const categories: any = [];
const titles = ['All', 'Adidas', 'Air Jordan', 'Nike', 'Reebok', 'Converse', 'Vans', 'Puma'];

titles.forEach((title) => {
  const category = {
    id: uuidv4(),
    title: title
  };

  categories.push(category);
});

fs.writeFile('./src/dump/categories.json', JSON.stringify(categories), (err) => {
  if (err) throw err;
  console.log('Complete');
});
