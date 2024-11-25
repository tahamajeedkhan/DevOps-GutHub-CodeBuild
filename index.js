// index.js

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Set up routes
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

// Handle errors
app.get('/error', (req, res) => {
    res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for testing purposes (this works for ESM)
export default app;