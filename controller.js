const Model = require('./models')

const Club = Model.Club
const Match = Model.Match
const Player = Model.Player

Club.findOne({
    include: ['challenger']
})
.then(row => {
    console.log(row.get().challenger)
})
.catch(err => {
    throw err;
})