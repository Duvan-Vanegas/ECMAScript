function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Dv', 30, 'CO', 1));