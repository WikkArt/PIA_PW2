const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const path = require('path');

// Configuración de multer para subir avatares
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/avatars'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Editar usuario
router.put('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password, avatar } = req.body;
  try {
    const usuarioActualizado = await prisma.usuario.update({
      where: { id_usuario: Number(id) },
      data: {
        nombre,
        email,
        ...(password && { password }),
        avatar
      },
    });
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Subir avatar
router.post('/avatar/:id', upload.single('avatar'), async (req, res) => {
  const { id } = req.params;
  if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });
  const avatarPath = `/uploads/avatars/${req.file.filename}`;
  try {
    await prisma.usuario.update({
      where: { id_usuario: Number(id) },
      data: { avatar: avatarPath }
    });
    res.json({ avatar: avatarPath });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;