const express = require('express')
const app = express()

const players = require('./routes/playerRoute')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.render('home.ejs')
})

// PLAYERS ROUTE
app.use('/players', players)

app.listen(3000, function(){
    console.log('App running on port 3000')
})