function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function(user) {
            return goodUsers.some(function(validUser) {
              return user.id === validUser.id
            })
        })
    }
}

module.exports = checkUsersValid