const express = require('express');
const router = express.Router();
const logger = require('./index');

router.get('/', (req, res) => {
    logger.debug('Este es un mensaje de depuración');
    logger.http('Este es un mensaje de registro HTTP');
    logger.info('Este es un mensaje informativo');
    logger.warning('Este es un mensaje de advertencia');
    logger.error('Este es un mensaje de error');
    logger.fatal('Este es un mensaje fatal');

    res.send('Prueba del logger completada. Revisa tu consola y registros.');
});

module.exports = router;
