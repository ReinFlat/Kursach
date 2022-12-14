require('dotenv').config()
const express = require('express')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))