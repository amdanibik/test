const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const router = require('./src/routes/user.routes');

const app = express();

const port = process.env.PORT || 5000;

urlencoded
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send("Hello world");
});

const userRoute = require('./src/routes/user.routes')

app.use('api/v1/user', userRoute)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});