const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  try {
    const { email, displayName } = req.body;

    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Crea un nuevo usuario
    const newUser = await User.create({
      email,
      displayName,
      // Agrega más campos según sea necesario
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};