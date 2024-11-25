const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Dynamic route example
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}!</h1>`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});