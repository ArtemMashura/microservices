const getStudentByID = 'SELECT * from NOTES WHERE id = $1';
const updateStudent = "UPDATE NOTES SET title = $1, creationDate = $2, content = $3, category = $4 WHERE id = $5"

module.exports = {
    getStudentByID,
    updateStudent,
}