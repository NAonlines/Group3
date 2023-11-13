{
    const express = require('express');
    const bodyParser = require('body-parser');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    const fs = require('fs');

    const app = express();
    const PORT = 3001;
    const JSON_PORT = 8000; // Cổng mới cho route hiển thị nội dung accounts.json
    const secretKey = 'your_secret_key';

    app.use(bodyParser.json());
    const cors = require('cors');
    app.use(cors({
        origin: 'http://localhost:3000', // Thay 3000 bằng cổng React của bạn
        credentials: true,
    }));

    const accountsData = fs.readFileSync('accounts.json');
    const accounts = JSON.parse(accountsData).accounts;

    const authenticateJWT = (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        jwt.verify(token, secretKey, (err, user) => {
            if (err) return res.status(403).json({ error: 'Forbidden' });

            req.user = user;
            next();
        });
    };

    // Route để hiển thị nội dung của accounts.json
    app.get('/accounts', (req, res) => {
        res.json({ accounts });
    });

    // Login route
    app.post('/login', async (req, res) => {
        console.log('Received login request');
        const { username, password } = req.body;
        const user = accounts.find((u) => u.username === username && bcrypt.compareSync(password, u.password));

        if (user) {
            const token = jwt.sign({ username: user.username, id: user.id }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            const errorData = await response.json();
            console.error('Invalid credentials. Server response:', errorData);
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });


    // Protected route
    app.get('/protected', authenticateJWT, (req, res) => {
        res.json({ message: 'This is a protected route', user: req.user });
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    // Tạo một server mới để hiển thị nội dung của accounts.json
    const jsonServer = express();
    jsonServer.use(cors()); // Đảm bảo server có thể chấp nhận các yêu cầu từ mọi nơi
    jsonServer.use(bodyParser.json());
    jsonServer.get('/accounts', (req, res) => {
        res.json({ accounts });
    });
    jsonServer.listen(JSON_PORT, () => {
        console.log(`JSON Server is running on port ${JSON_PORT}`);
    });

}