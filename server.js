const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomText = Math.random().toString(36).substring(7);
    res.json({ number: randomNumber, text: randomText });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
