const express = require('express');
const app = express();
const cors = require('cors');
const _ = require('lodash'); // Import lodash for filtering
app.use(express.json());
const data = require('./data.json');
app.use(cors());

app.get("/", (req, res) => {
    let filteredData = data;

    // Check if region query parameter is present
    if (req.query.region) {
        const region = req.query.region.toLowerCase();
        filteredData = _.filter(data, country => country.region.toLowerCase() === region);
    }

    res.json(filteredData);
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

module.exports = app;
