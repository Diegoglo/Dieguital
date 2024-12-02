const pool = require('../../db'); // Asegúrate de importar tu configuración de pool de PostgreSQL

exports.getMessages = (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Acceso denegado');
    }
    res.status(200).json(mensajes);
};


exports.postMessage = async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Verificar que no falten campos
  if (!nombre || !email || !mensaje) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    // Insertar el mensaje en la base de datos
    const result = await pool.query(
      'INSERT INTO contactos (nombre, correo, mensaje) VALUES ($1, $2, $3) RETURNING *',
      [nombre, email, mensaje]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
};