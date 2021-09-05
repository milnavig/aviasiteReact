const Router = require('express');
const newsController = require('../controllers/newsController');
//const checkRole = require('../middleware/checkRoleMiddleware');
const commentRouter = require('./commentRouter');
const auth = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', auth, newsController.create);
router.get('/', newsController.getAll);
router.get('/:id', newsController.getOne);
router.delete('/:id', newsController.delete);
router.put('/:id', newsController.change);

router.use('/:postId/comments', commentRouter);

module.exports = router;