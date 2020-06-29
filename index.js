const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//routers
const postsRouter = require('./routers/posts');
app.get('/', (req, res) => {
    res.send('we are on home');
})
app.use('/posts', postsRouter);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db!');
});


app.listen(3000);


