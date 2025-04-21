// Import express
const express = require('express');
const app = express();
const port = 7000;

app.use(express.json());

app.use(express.static('public'));

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body; 
    const sum = Number(num1) + Number(num2); 
    res.json({ sum });  
});

// Start the server
app.listen(7000, () => {
    console.log(`Server running at http://localhost:${port}`);
});
