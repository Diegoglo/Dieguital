exports.getMessages = (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Acceso denegado');
    }
    res.status(200).json(mensajes);
};

exports.postMessage = (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log('Mensaje recibido:', { nombre, email, mensaje });
    res.status(200).json({ message: 'Mensaje recibido correctamente' });
};
