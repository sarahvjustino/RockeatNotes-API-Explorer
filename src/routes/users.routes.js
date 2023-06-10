const { Router } = require('express');

const UsersController = require('../controller/UsersController').default;

const UsersRoutes = Router();

const usersController = new UsersController();

UsersRoutes.post('/', usersController.create);

module.exports = UsersRoutes;