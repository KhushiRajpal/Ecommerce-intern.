const express = require('express');

const app = express();

require('dotenv/config');
const api = process.env.API_URL;
//Middleware
app.use(express.json());


app.get(`${api}/products` , (req, res) => {
	const product = {
		id: 1,
		name: 'Tresemme shampoo',
		image: 'someurl',
	}
	res.send(product);
})

app.post(`${api}/products` , (req, res) => {
	const newProduct = req.body;
	console.log(newProduct);
	res.send(newProduct);
})

app.listen(3000, () => {
	console.log(api);
	console.log(`Serve at http://localhost:3000`);
});