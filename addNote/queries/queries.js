const addStudent = "INSERT INTO NOTES (title, creationDate, content, category) VALUES ($1, $2, $3, $4)"
const getUser = 'SELECT * FROM users WHERE username = $1'
const updateToken = "UPDATE users SET username = $1, password = $2, refreshtoken = $3 WHERE id = $4"
const createUser = "INSERT INTO users (username, password) VALUES ($1, $2)"

module.exports = {
    addStudent,
    getUser,
    updateToken,
    createUser
}