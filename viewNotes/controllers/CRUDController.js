const pool = require('../db');
const queries = require("../queries/queries")

const getStudents = async (req, res) =>{
    pool.query(queries.getStudents, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}

const getStudentByID = async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentByID, [id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}

module.exports = {
    getStudents,
    getStudentByID,
}