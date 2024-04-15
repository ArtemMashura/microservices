const pool = require('../db');
const queries = require("../queries/queries")

const updateStudent = async (req, res) => {
    const id = parseInt(req.params.id);
    var { title, creationDate, content, category } = req.body

    const client = await pool.connect()
    client.query(queries.getStudentByID, [id], (err, result) => {
        if (!result.rows.length) {
            res.status(404).send("Note not found")
        }
        else {
            if (!title){
                title = result.rows[0].title
            }
            if (!creationDate){
                creationDate = result.rows[0].creationdate
            }
            if (!content){
                content = result.rows[0].content
            }
            if (!category){
                category = result.rows[0].category
            }
            client.query(queries.updateStudent, [title, creationDate, content, category, id], (err, result) => {
                if (err) throw err;
                res.status(200).send(result)
            })
        }
    })
    client.release()
}

module.exports = {
    updateStudent,
}