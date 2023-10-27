const express = require('express');
const connection = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));