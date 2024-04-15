const pool = require('../db');
const queries = require("../queries/queries")

const deleteStudent = async (req, res) => {
    const id = parseInt(req.params.id);
    const client = await pool.connect()
    client.query(queries.getStudentByID, [id], (err, result) => {
        if (!result.rows.length) {
            res.status(404).send("Note not found")
        }
        else {
            client.query(queries.removeStudent, [id], (err, result) => {
                if (err) throw err;
                res.status(200).send(result)
            })
        }
    })
    client.release()
}

module.exports = {
    deleteStudent,
}