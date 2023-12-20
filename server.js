const express = require('express');
const employeeRoutes =  require('./src/employees/routes');

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World !");
});

app.use('/api/v01/employees', employeeRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));