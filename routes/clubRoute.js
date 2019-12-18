const express = require('express')
const router = express.Router()
const Model = require('../models')

const Club = Model.Club

const Player = Model.Player


router.get('/', (req, res) => {
    Club.findAll({
        include: [Player]
    })
    .then(rows => {
        res.render('clubList.ejs', {clubs: rows})
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
    })
    .then(row => {
        res.redirect(`/${row.id}`)
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/club/:id', (req, res) => {
    Club.findByPk(req.params.id, {
        include: [Player]
    })
    .then(row => {
        res.render('clubProfile.ejs', {club: row.get()})
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router