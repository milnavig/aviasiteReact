const { Post, Tag, PostTag, Comment } = require('./models/models');

const root = {
    getNewsList: async () => {
        const posts = await Post.findAll({include: {model: Tag, as: 'tags'}});
        return posts;
    },
    getNews: async ({id}) => {
        const post = await Post.findOne({
            where: {id},
            include: {model: Tag, as: 'tags'}
        });
        return post;
    },
    getNewsSet: async ({page, limit}) => {
        page = page || 1;
        limit = limit || 5;
        let offset = limit * (page - 1);

        let posts; 
        posts = await Post.findAndCountAll({limit, offset});

        return posts;
    },
    postComment: async ({input}) => {
        const comment = await Comment.create({text: input.text, postId: input.postId, userId: input.userId});
        
        return comment;
    }
}

module.exports = root;