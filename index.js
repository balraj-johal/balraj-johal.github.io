const express = require('express');
const path = require('path');

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'portfolio_client', 'build')));
    
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "portfolio_client", "build", "index.html"));
});

// app.get("/", (req, res) => res.send("Hello World!"))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))