const express = require('express');
const UserController = require('./controllers/UserControllers');
const LikeController = require('./controllers/LikeController');
const DeslikeController = require('./controllers/DeslikeController');

const routes = express();

routes.get('/', (req, res) => {
    return res.json({ mensage: `TOP`});
});

routes.get('/user',UserController.index);
routes.post('/user',UserController.create);
routes.post('/user/:userId/likes', LikeController.store);
routes.post('/user/:userId/deslikes', DeslikeController.store);

module.exports = routes;