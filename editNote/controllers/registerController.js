const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const pool = require('../db');
const queries = require("../queries/queries")

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    const client = await pool.connect()

    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    var duplicate
    // check for duplicate usernames in the db
    client.query(queries.getUser, [user], async (err, result) => {
        if (err) throw err;
        duplicate = result.rows;
        console.log(duplicate);
        if (duplicate[0]) return res.status(409).json({'Conflict': 'Username taken'}); //Conflict 
        else {
            try {
                //encrypt the password
                const hashedPwd = await bcrypt.hash(pwd, 10);
        
                //create and store the new user
                client.query(queries.createUser, [user, hashedPwd], (err, result) => {
                    if (err) throw err;
                    res.status(201).json({ 'success': `New user ${user} created!` });
                })
        
                
            } catch (err) {
                res.status(500).json({ 'message': err.message });
            }
        }
    })
    
}

module.exports = { 
    handleNewUser,
};