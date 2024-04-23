require('dotenv').config();
const express = require('express');
const app = express();
const verifyJWT = require('./middleware/verifyJWT');

app.use(express.json())

const CRUD = require("./routes/CRUD")

const PORT = process.env.PORT || 3500;

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/auth'));

app.use(verifyJWT);
app.use("/", CRUD)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
