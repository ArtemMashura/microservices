const getStudentByID = 'SELECT * from NOTES WHERE id = $1';
const removeStudent = "DELETE FROM NOTES WHERE id = $1"

module.exports = {
    getStudentByID,
    removeStudent,
}