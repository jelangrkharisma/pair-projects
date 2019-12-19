function findGoals(arr, playerId) {
    let goals = 0
    arr.forEach(data => {
        if (data.get().PlayerId === playerId && data.status === 'goal') {
            goals++
        }
    })
    return goals
}

module.exports = findGoals