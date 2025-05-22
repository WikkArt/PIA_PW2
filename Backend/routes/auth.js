const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/avatars'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Registro de usuario
router.post('/registro', upload.single('avatar'), async (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password; 
  let avatarUrl = null;
  if (req.file) {
    avatarUrl = `/uploads/avatars/${req.file.filename}`;
  }
  try {
    const user = await prisma.usuario.create({
      data: {
        nombre,
        email,
        password, 
        avatar: avatarUrl,
        fecha_registro: new Date(),
      }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
  const { nombre, password } = req.body;
  try {
    const user = await prisma.usuario.findFirst({
      where: { nombre, password }
    });
    if (user) {
      // No envíes la contraseña al frontend
      const { password, ...userData } = user;
      res.json({ success: true, user: userData });
    } else {
      res.status(401).json({ success: false, error: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error en el servidor' });
  }
});

module.exports = router;