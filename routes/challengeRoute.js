const express = require('express')
const router = express.Router()

const Model = require('../models')
const Challenge = Model.Challenge

router.get('/challenge/:receiverId', (req, res) => {
    Challenge.findAll({
        where: {
            ReceiverId: req.params.receiverId
        },
        include: [Club]
    })
    .then(rows => {
        res.render('challengesList.ejs', {challenges: rows})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/challenge/:receiverId/:challengerId', (req, res) => {
    Challenge.update({
        accepted: 1
    }, {
        where: {
            ChallengerId: req.params.challengerId,
            ReceiverId: req.params.receiverId
        }
    })
    .then(() => {
        res.redirect('/match/assignmatch');
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router