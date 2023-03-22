const { User, Post } = require('../models')
const { UserType, PostType} = require('./types')
const { GraphQLList, GraphQLID, GraphQLString  } = require('graphql')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users from the database',
    resolve(parent, args){
        return User.find().sort({username: 'asc'}) // Order By
    }
}

const user = {
    type: UserType,
    description: 'Query a user by their ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

const postBySlug = {
    type: PostType,
    description: "Query quiz by it's slug",
    args: {
        id: { type: GraphQLString}
    },
    resolve(parent, args){
        return Post.findOne(args.id)
    }
}

module.exports = {
    users,
    user,
    postBySlug
    
}