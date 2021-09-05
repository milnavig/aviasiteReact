const {Comment, User} = require('../models/models');
const ApiError = require('../error/APIError');

class CommentController {
    async create(req, res) {
        const { postId } = req.params;
        //const id = req.user.id;
        const { text } = req.body;

        const comment = await Comment.create({text, postId: postId, userId: 1});
        
        return res.json(comment);
    }

    async getAllForPost(req, res) {
        console.log('It\'s working!');
        const { postId } = req.params;
        const comments = await Comment.findAll({
            where: {
                postId
            },
            // include: User
        });
        console.log(comments);
        return res.json(comments);
    }

    async getOne(req, res) {
        const { postId, CommentId } = req.params;
        const comment = await Comment.findOne({
            where: { postId, id: CommentId}
        });
        return res.json(comment);
    }

    async delete(req, res) {
        const { CommentId } = req.params;

        const comment = await Comment.destroy({
            where: {
              id: CommentId
            }
        });
        return res.json(comment);
    }

    async change(req, res) {
        const { CommentId } = req.params;
        const body = req.body;
        
        const comment = await Comment.update({ ...body },
        { where: { id: CommentId } });
        return res.json(comment);
    }
}

module.exports = new CommentController();