const getStudents = 'SELECT * from NOTES';
const getStudentByID = 'SELECT * from NOTES WHERE id = $1';

module.exports = {
    getStudents,
    getStudentByID,
}