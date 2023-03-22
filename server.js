const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { User, Post } = require('./src/models')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')

dotenv.config()
connectDB()

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

require('./src/routes')(app)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => {
    console.log(`Quizly running on port ${process.env.PORT}`)
})