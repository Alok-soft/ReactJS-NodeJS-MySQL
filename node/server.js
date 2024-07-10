const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const signup = require('./signup')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/signup', signup.signup)


app.listen(3001, (err) => {
    console.log('Connected port 3001...')
})