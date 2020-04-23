const express = require('express');

// rotas
const users = require('./users');

// instancia do router
const router = express.Router();

// rotas base
router.use('/users/', users);

export default router;