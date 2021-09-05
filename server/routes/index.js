const Router = require('express');

const router = new Router();

const newsRouter = require('./newsRouter');
//const productRouter = require('./productRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/news', newsRouter);
//router.use('/product', productRouter);

module.exports = router;