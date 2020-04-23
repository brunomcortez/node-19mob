const express = require('express');

// instancia do router
const router = express.Router();

router.get('/:id', (req, res) => {
    res.send(`Eu recebi o parametro ${req.params.id}`);
});

// export default router;
module.exports = router;