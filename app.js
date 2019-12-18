const express = require('express')
const app = express()

const players = require('./routes/playerRoute')
const clubs = require('./routes/clubRoute')


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs', {wrong: false})
})

// PLAYERS ROUTE
app.use('/players', players)


// CLUBS ROUTE
app.use('/clubs', players)



app.listen(3000, function () {
    console.log('App running on port 3000')
})