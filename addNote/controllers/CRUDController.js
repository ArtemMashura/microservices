const pool = require('../db');
const queries = require("../queries/queries")

const addStudent = async (req, res) => {
    const { title, creationDate, content, category } = req.body
    const client = await pool.connect()
    client.query(queries.addStudent, [title, creationDate, content, category], (err, result) => {
        if (err) throw err;
        res.status(201).send(result)
    })
    client.release()
}

module.exports = {
    addStudent,
}