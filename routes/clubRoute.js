const express = require('express')
const router = express.Router()
const Model = require('../models')

const Club = Model.Club

const Player = Model.Player
const Challenge = Model.Challenge
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res) => {
    Club.findAll({
        include: [Player]
    })
        .then(rows => {
            res.render('clubList.ejs', { clubs: rows })
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/create', (req, res) => {
    res.render('createClub.ejs')
})

router.post('/create', (req, res) => {
    Club.create({
        name: req.body.name,
        isOpen: 1
    })
        .then(row => {
            res.redirect(`/${row.id}`)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/club/:id', (req, res) => {
    let club = null;
    Club.findByPk(req.params.id, {
        include: [Player]
    })
    .then(row => {
        club = row
        return Challenge.findAll({
            where: {
                [Op.or]: [
                    { ChallengerId: row.id},
                    { ReceiverId: row.id}
                ]
            },
            include: ['Challenger', 'Receiver']
        })
    })
    .then((rows) => {
        // res.send(rows)
        res.render('clubProfile.ejs', { club: club, challenges:rows})
    })
    .catch(err => {
        throw err;
    })
})

router.get('/open', (req, res) => {
    const options = {
        where: {
            isOpen: 1
        }
    }
    Club.findAll(options)
        .then(clubs => {
            res.render('openClubs.ejs', { clubs })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router