

/**
 * 
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.user = { username };
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

/**
 * 
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error al cerrar sesión' });
        }
        res.status(200).json({ message: 'Cierre de sesión exitoso' });
    });
};

/**
 * 
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.getStatus = (req, res) => {
    if (req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Usuario no autenticado' });
    }
};
