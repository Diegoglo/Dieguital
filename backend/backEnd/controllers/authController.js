const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usuarios = require('../models/userModel');
const secretKey = process.env.SECRET_KEY;

exports.login = (req, res) => {
    const { email, password } = req.body;
    const usuario = usuarios.find(u => u.email === email);
    if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
        return res.status(401).send('Credenciales inválidas');
    }
    const token = jwt.sign({ email: usuario.email, role: usuario.role }, secretKey, { expiresIn: '1h' });
    console.log("Logueado correctamente");
    res.status(200).json({ token });
};

exports.register = (req, res) => {
    const { name, email, age, gender, password } = req.body;
    const existingUser = usuarios.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).send('El correo electrónico ya está registrado');
    }
    if (!name || !email || !age || !gender || !password) {
        return res.status(400).send('Todos los campos son obligatorios');
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    usuarios.push({
        name,
        email,
        password: hashedPassword,
        age,
        gender,
        role: 'user'
    });
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
};
