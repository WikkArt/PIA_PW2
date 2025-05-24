const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Eliminar usuario por ID (en cascada)
router.delete('/usuario/:id', async (req, res) => {
  const id_usuario = Number(req.params.id);
  try {
    await prisma.usuario.delete({
      where: { id_usuario }
    });
    res.json({ message: 'Usuario y datos relacionados eliminados.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;