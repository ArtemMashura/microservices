const getStudents = 'SELECT * from NOTES';
const getStudentByID = 'SELECT * from NOTES WHERE id = $1';
const getUser = 'SELECT * FROM users WHERE username = $1'
const updateToken = "UPDATE users SET username = $1, password = $2, refreshtoken = $3 WHERE id = $4"
const createUser = "INSERT INTO users (username, password) VALUES ($1, $2)"

module.exports = {
    getStudents,
    getStudentByID,
    getUser,
    updateToken,
    createUser
}