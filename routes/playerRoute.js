const express = require('express')
const router = express.Router()

const Model = require('../models')

const Player = Model.Player;
const Club = Model.Club;
const Match = Model.Match;
const MatchDetail = Model.MatchDetail;

const Sequelize = require('sequelize')
const Op = Sequelize.Op

const findGoals = require('../helpers/findGoals')
const findFouls = require('../helpers/findFouls')

router.get('/', (req, res) => {
    Player.findAll({
        include: [Club, MatchDetail],
        order: [
            ['id', 'ASC']
        ]
    })
        .then(players => {
            res.render('playerList.ejs', { players: players, findGoals: findGoals, findFouls: findFouls })
        })
        .catch(err => {
            throw err
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
                res.render('home.ejs', { wrong: true })
            }
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/player/:id', (req, res) => {
    let player = null;
    let matchHistory = null
    Player.findByPk(req.params.id, {
        include: [Club]
    })
        .then(row => {
            player = row
            if (row.Club == null) {
                res.render('playerProfile.ejs', { player: player, matches: null })
            } else {
                return Match.findAll({
                    where: {
                        [Op.or]: [
                            { ChallengerId: row.Club.id },
                            { ReceiverId: row.Club.id }
                        ]
                    },
                    include: ['Challenger', 'Receiver']
                })
            }
        })
        .then((match) => {
            res.render('playerProfile.ejs', { player: player, matches: match })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router