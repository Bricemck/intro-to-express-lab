const express = require('express')
const app = express()
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  
  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hi ${username}, nice to see you again`);
});

app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    if (isNaN(number)) {
        res.send('must be a whole number')
    }
    else {
        res.send(`You rolled ${Math.floor(Math.random() * number) +1}`);
    }
  });

app.get(`/collectibles/:index`, (req, res) => {
    const index = req.params.index
    
    if (index > collectibles.length -1) {
        res.send(`This item is not yet in stock, Check back soon!`)
    }
    else {
        console.log(collectibles[index].name)
        res.send(`So you want the ${collectibles[index].name}? For, $${collectibles[index].price} it can be yours!`)
    }
})

app.get(`/shoes`, (req, res) => {
    const name = req.query.name
    const price = req.query.price 
    const type = req.query.type 

    res.send(shoes)
})