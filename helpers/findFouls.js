function findFouls(arr, playerId) {
    let goals = 0
    arr.forEach(data => {
        if (data.get().PlayerId === playerId && data.status === 'foul') {
            goals++
        }
    })
    return goals
}

module.exports = findFouls