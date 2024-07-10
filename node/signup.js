const { json } = require('express')
const conn = require('./db')

const signup = (req, res) => {
    const qury = "INSERT INTO users (`name`, `email`, `userid`, `password`) VALUES (?)";
    const value = [
        req.body.name,
        req.body.email,
        req.body.userid,
        req.body.pass
    ]

    conn.db.query(qury, [value], (err, result) => {
        if(err){
            res.status(400).send(err)
        }
        res.status(200).send('User Created')
    })
}


module.exports = {
    signup
}