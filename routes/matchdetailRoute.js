const express = require('express')
const Model = require('../models')

const Match = Model.Match
const Club = Model.Club
const Player = Model.Player
const MatchDetail = Model.MatchDetail

const router = express.Router()

router.post('/')
module.exports = router