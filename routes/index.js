const express = require('express');

// rotas
const auth = require("./auth");
const users = require('./users');

// instancia do router
const router = express.Router();

// rotas base
router.use("/auth", auth);
router.use('/users/', users);

// export default router;
module.exports = router;
