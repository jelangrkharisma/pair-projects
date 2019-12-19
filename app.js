const express = require('express')
const app = express()

const players = require('./routes/playerRoute')
const clubs = require('./routes/clubRoute')
const challenges = require('./routes/challengeRoute')
const matches = require('./routes/matchRoute')
const matchdetails = require('./routes/matchdetailRoute')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs', {wrong: false})
})

// PLAYERS ROUTE
app.use('/players', players)


// CLUBS ROUTE
app.use('/clubs', clubs)

// CHALLENGES ROUTE
app.use('/challenges', challenges)

// MATCHES ROUTE
app.use('/matches', matches)

// MATCHDETAILS ROUTE
app.use('/matchdetails', matchdetails)

app.listen(3000, function () {
    console.log('App running on port 3000')
})