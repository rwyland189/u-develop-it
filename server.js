const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middlware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect app to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: '!Quill189!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Handle user requests not supported by the app / Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// Connection function
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});