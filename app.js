const express = require('express')
const path = require('path')

const app = express()

const hostname = 'localhost'
const port = 3000

// static setup
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port　+　'/')
})