const express = require('express')
const app = express()

const port = 3000;

const cors = require('cors');
app.use(cors());

const usersRouter = require('./routes/users')
const apisRouter = require('./routes/apis')

app.use('/users', usersRouter)
app.use('/apis', apisRouter)

app.get('/', (req, res) => {
    res.download("server.js")
    res.send('Hello, EventFlow!')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
