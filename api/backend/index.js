import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Chair',
      price: 200,
      image: 'https://www.pexels.com/photo/landscape-photography-20072361/'
    },
    {
      id: 2,
      name: 'Sofa',
      price: 300,
      image: 'https://www.pexels.com/video/florianopolis-santa-catarina-drone-4k-morning-sunrise-19353624/'
    },
    {
      id: 3,
      name: 'table wooden',
      price: 400,
      image: 'https://www.pexels.com/video/florianopolis-santa-catarina-drone-4k-morning-sunrise-19353624/'
    },
    {
      id: 4,
      name: 'Kitchen set',
      price: 300,
      image: 'https://www.pexels.com/video/florianopolis-santa-catarina-drone-4k-morning-sunrise-19353624/'
    }
  ];

  // http://localhost:3000/api/products?search=metal
  if (req.query.search) {
    const filterProducts = products.filter(product => product.name.includes(req.query.search));
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
    return;
  }, 3000);


});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});