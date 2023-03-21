const express = require('express')
const path = require('path')

const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.set('views', './templates/views')

app.use('/images', express.static('images'))
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/user', (req, res) => {
    res.render('user')
})

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})