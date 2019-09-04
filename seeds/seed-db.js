const db = require('../models');

const items = [
    {
        product_name: 'Pet Kennel',
        department_name: 'Animals',
        price: 10,
        stock_quantity: 25
    },
    {
        product_name: 'Training Chain Dog',
        department_name: 'Animals',
        price: 30,
        stock_quantity: 49
    },
    {
        product_name: 'The Lion King',
        department_name: 'Movies',
        price: 3,
        stock_quantity: 7
    },
    {
        product_name:'Polo Shirt',
        department_name: 'Clothing',
        price: 45,
        stock_quantity:8
    },
    {
        product_name: 'Nike Jacket',
        department_name: 'Clothing',
        price: 24,
        stock_quantity: 60
    },
    {
        product_name: 'Fiberglass Shevel',
        department_name: 'Gardening',
        price: 40,
        stock_quantity: 118
    },
    {
        product_name: 'Laptop',
        department_name:'Electronics',
        price: 899,
        stock_quantity: 7
    },
    {
        product_name: 'iPad 6 Gen',
        department_name: 'Electronics',
        price: 499,
        stock_quantity: 8
    },
    {
        product_name: 'Shoes',
        department_name: 'Clothing',
        price: 99,
        stock_quantity: 83
    },
    {
        product_name: 'Hair Cut',
        department_name: 'Beauty',
        price: 30,
        stock_quantity: 123
    },
];

db.sequelize.sync({ force: true }).then(function () {
    db.Product.bulkCreate(items)
        .then(function (rows) {
            console.log(`\n${rows.length} Rows Inserted`);
        })
        .catch(function (err) {
            console.log('\nError:', err);
        });
});