const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener historial de búsqueda de un usuario
router.get('/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const historial = await prisma.historialBusqueda.findMany({
      where: { id_usuario: Number(id_usuario) },
      orderBy: { fecha_busqueda: 'desc' }
    });
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;