const { buildSchema } = require('graphql');

const schema = buildSchema(
    `
    type Tag {
        id: ID
        name: String
    }

    type News {
        id: ID
        headline: String
        description: String
        body: String
        img: String
        timestamp: String
        tags: [Tag]
    }

    type Page {
        count: Int
        rows: [News]
    }

    type Query {
        getNewsList: [News]
        getNews(id: ID): News
        getNewsSet(page: Int, limit: Int): Page
    }

    type User {
        id: ID
        email: String
        username: String
        role: String
    }

    type Comment {
        id: ID
        text: String
        timestamp: String
        user: User
    }

    input CommentInput {
        text: String!
        postId: Int!
        userId: Int!
    }

    type Mutation {
        postComment(input: CommentInput): Comment
    }
    `
);

module.exports = schema;