const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const pool = require('../db');
const queries = require("../queries/queries")

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    const client = await pool.connect()
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    client.query(queries.getUser, [user], async (err, result) => {
        if (err) throw err;
        const foundUser = result.rows[0]
        if (!foundUser) return res.status(401).json({'NotFound' : 'User not found'}); //Unauthorized 
        else {
            // evaluate password 
            console.log(foundUser)
            const match = await bcrypt.compare(pwd, foundUser.password);
            if (match) {
                // create JWTs
                const accessToken = jwt.sign(
                    { "username": foundUser.username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30s' }
                );
                const refreshToken = jwt.sign(
                    { "username": foundUser.username },
                    process.env.REFRESH_TOKEN_SECRET,
                    { expiresIn: '1d' }
                );
                client.query(queries.updateToken, [foundUser.username, foundUser.password, refreshToken, foundUser.id], (err, result) => {
                    if (err) throw err;
                })
                res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
                res.json({ accessToken });
            } else {
                res.status(401).json({'Password' : 'Incorect password'});
            }
        }
        
    })
    
}



module.exports = { 
    handleLogin,
};