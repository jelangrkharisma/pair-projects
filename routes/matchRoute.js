const express = require('express')
const Model = require('../models')

const Match = Model.Match
const Club = Model.Club
const Player = Model.Player
const MatchDetail = Model.MatchDetail

const router = express.Router()

router.get('/match/:id', (req, res) => {
    Match.findByPk(req.params.id, {
        include: [
            ['Challenger', 'Receiver']
        ]
    })
    .then(rows => {
        res.send(rows)
    })
})

router.get('/assignmatch', (req, res) => {
    res.render('formMatch.ejs')
})

router.post('/assignmatch', (req, res) => {
    Match.create({
        ChallengerId: req.body.ChallengerId,
        ReceiverId: req.body.ReceiverId,
        date: req.body.date,
        venue: req.body.venue
    })
        .then(row => {
            res.render('currentMatch.ejs', { data: row })
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/results/:id', (req, res) => {
    Match.findByPk(req.params.id, {
        include: [Club]
    })
})
module.exports = router