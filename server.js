// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 8000;

// let users = [];

// app.use(bodyParser.json());

// app.post('/Users', (req, res) => {
//     const newUser = req.body;

//     const usernameExists = users.some(user => user.username === newUser.username);
//     const emailExists = users.some(user => user.email === newUser.email);

//     if (usernameExists) {
//         return res.status(400).json({ error: 'Username already exists.' });
//     }

//     if (emailExists) {
//         return res.status(400).json({ error: 'Email already exists.' });
//     }

//     users.push(newUser);

//     res.status(201).json({ message: 'User registered successfully.' });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
