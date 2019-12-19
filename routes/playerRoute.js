const express = require('express')
const router = express.Router()

const Model = require('../models')

const Player = Model.Player
const Club = Model.Club
const MatchDetail = Model.MatchDetail

router.get('/', (req, res) => {
    const players = null
    Player.findAll({
        include: [Club]
    })
    .then(rows => {
        players = rows
        return MatchDetail.findAll()
    })
    .then(rows => {
        const goals = [];
        const fouls = [];
        players.forEach(player => {
            goals.push(p)
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/register', (req, res) => {
    res.render('registerPlayer.ejs')
})

router.post('/register', (req, res) => {
    Player.create({
        name: req.body.name,
        position: req.body.position,
        password: req.body.password,
        ClubId: null,
        username: req.body.username
    })
    .then(row => {
        console.log(row)
        res.redirect(`player/${row.id}`)
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/login', (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(row => {
        if (req.body.password === row.password) {
            res.redirect(`player/${row.id}`)
        } else {
            res.render('home.ejs', {wrong: true})
        }
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/player/:id', (req, res) => {
    Player.findByPk(req.params.id, {
        include: [Club]
    })
        .then(row => {
            res.render('playerProfile.ejs', { player: row.get() })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router