const Router = require('express');
const commentController = require('../controllers/commentController');
//const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/', commentController.create);
router.get('/', commentController.getAllForPost);
router.get('/:CommentId', commentController.getOne);
router.delete('/:CommentId', commentController.delete);
router.put('/:CommentId', commentController.change);

module.exports = router;