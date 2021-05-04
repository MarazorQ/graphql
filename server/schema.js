const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type User {
        id: ID
        username: String
        age: Int
        post: [Post]
    }
    type Post {
        id: ID
        title: String
        content: String
    }
    input UserInput{
        id: ID
        username: String!
        age: Int!
        post: [Post]
    }
    input PostInput {
        id: ID
        title: String!
        content: String!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
`)

module.export = schema