const getStudentByID = 'SELECT * from NOTES WHERE id = $1';
const updateStudent = "UPDATE NOTES SET title = $1, creationDate = $2, content = $3, category = $4 WHERE id = $5"
const getUser = 'SELECT * FROM users WHERE username = $1'
const updateToken = "UPDATE users SET username = $1, password = $2, refreshtoken = $3 WHERE id = $4"
const createUser = "INSERT INTO users (username, password) VALUES ($1, $2)"

module.exports = {
    getStudentByID,
    updateStudent,
    getUser,
    updateToken,
    createUser
}