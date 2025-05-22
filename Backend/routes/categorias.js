const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear categoría
router.post('/crear', async (req, res) => {
  const { nombre, descripcion, tipo_categoria } = req.body;
  try {
    const nuevaCategoria = await prisma.categoria.create({
      data: {
        nombre,
        descripcion,
        tipo_categoria,
      },
    });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const categorias = await prisma.categoria.findMany();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una categoría por ID
router.put('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, tipo_categoria } = req.body;
  try {
    const categoriaActualizada = await prisma.categoria.update({
      where: { id_categoria: Number(id) },
      data: { nombre, descripcion, tipo_categoria },
    });
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;