const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Crear un comentario
router.post("/", async (req, res) => {
  const { id_usuario, id_post, contenido } = req.body;
  try {
    const comentario = await prisma.comentario.create({
      data: {
        id_usuario: Number(id_usuario),
        id_post: Number(id_post),
        contenido,
      },
      include: { usuario: true }
    });
    res.json(comentario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;