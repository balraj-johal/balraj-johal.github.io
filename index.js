const express = require('express');
const path = require('path');

const s3 = require("./routes/api/s3");

const app = express();

app.use("/api/s3", s3);

const PORT = process.env.PORT || 3001;

app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

app.use(express.static(path.resolve(__dirname, 'portfolio_client', 'build')));
    
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "portfolio_client", "build", "index.html"));
});

// app.get("/", (req, res) => res.send("Hello World!"))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))