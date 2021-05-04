const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const app = express()
app.use(cors())

const PORT = 5000

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(PORT, ()=>console.log('Server is run on ', PORT))