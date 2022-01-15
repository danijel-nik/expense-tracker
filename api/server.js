const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: 'config.env' })

const transactions = require('./routes/transactionsRouter')

const app = express()

app.use('/api/vi/transactions', transactions)

app.get('/', (req, res) => {
    res.send("Expense tracker API")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))