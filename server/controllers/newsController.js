const { Post, Tag, PostTag } = require('../models/models');
const ApiError = require('../error/APIError');
const uuid = require('uuid');
const path = require('path');

class NewsController {
    async create(req, res) {
        const {headline, description, body, tags} = req.body;
        const { img } = req.files;
        let filename = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', filename));
        let tag_arr = [];

        for (let tag of JSON.parse(tags)) {
            let t = await Tag.findOne({where: {name: tag}});
            if (!t) {
                t = await Tag.create({name: tag});
            }
            tag_arr.push(t);
        }

        const post = await Post.create({headline, description, body, img: filename});

        for (let tag of tag_arr) {
            await PostTag.create({postId: post.id, tagId: tag.id});
        }
        
        return res.json(post);
    }

    async getAll(req, res) {
        const posts = await Post.findAll({include: {model: Tag, as: 'tags'}});
        return res.json(posts);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const post = await Post.findOne({
            where: {id},
            include: {model: Tag, as: 'tags'}
        });
        return res.json(post);
    }

    async delete(req, res) {
        const {id} = req.params;

        const post = await Post.destroy({
            where: {
              id
            }
        });
        return res.json(post);
    }

    async change(req, res) {
        const {id} = req.params;
        const body = req.body;
        
        const post = await Post.update({ ...body },
        { where: { id } });
        return res.json(post);
    }
}

module.exports = new NewsController();
