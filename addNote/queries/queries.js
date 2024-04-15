const getStudents = 'SELECT * from NOTES';
const getStudentByID = 'SELECT * from NOTES WHERE id = $1';
const addStudent = "INSERT INTO NOTES (title, creationDate, content, category) VALUES ($1, $2, $3, $4)"
const removeStudent = "DELETE FROM NOTES WHERE id = $1"
const updateStudent = "UPDATE NOTES SET title = $1, creationDate = $2, content = $3, category = $4 WHERE id = $5"

module.exports = {
    getStudents,
    getStudentByID,
    addStudent,
    removeStudent,
    updateStudent,
}