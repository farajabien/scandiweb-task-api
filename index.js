const express = require('express')
const app = express()
require('dotenv').config()

const db = require('./models')

const cors = require('cors')

app.use(cors())

app.use(express.json())

db.sequelize
	.sync()
	.then(() => {
		app.listen(process.env.PORT || 3001, () => {
			console.log('Server running on port 3001...')
		})
	})
	.catch((err) => console.error(err))

//route that gets all products in the DB and returns them as json
app.get('/products', (req, res) => {
	db.Product.findAll()
		.then((products) => {
			res.json(products)
		})
		.catch((err) => {
			res.status(404).json(err)
		})
})

app.post('/products', (req, res) => {
	db.Product.create(req.body).then((product) => {
		console.log(product)
		res.json(product)
	})
})

app.delete('/products', (req, res) => {
	const ids = req.body.deletedItemsIds
	db.Product.destroy({ where: { id: ids } })
		.then(() => {
			res.json('Deleted successfully!!ß')
		})
		.catch((err) => {
			res.status(404).json(err)
		})
})
