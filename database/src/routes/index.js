const Router = require('express').Router;

const ecomexpressRoutes = require('./ecomexpress');


const router = Router();

router.use('/ecomexpress', ecomexpressRoutes);


module.exports = router;
