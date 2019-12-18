const Model = require('../models')

const Club = Model.Club

const Player = Model.Player

router.get('/', (req, res) => {
    Club.findAll({
        include: [Club]
    })
    .then(rows => {
        res.render('playerList.ejs', {players: rows})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:id', (req, res) => {
    Player.findByPk(req.params.id, {
        include: [Club]
    })
    .then(row => {
        res.render('playerProfile.ejs', {player: row.get()})
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
    })
    .then(row => {
        console.log(row)
        res.redirect(`/${row.id}`)
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router