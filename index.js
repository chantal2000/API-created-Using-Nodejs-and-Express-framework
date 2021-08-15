import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
const app = express()
const PORT = 7000
app.use(bodyParser.json())
app.use('/', usersRoutes)
app.get('/', (req, res) => {
    res.send("Hello; This is an API for employees")

})
app.listen(PORT, () => console.log(`Server running on the port: http://localhost:${PORT}`))