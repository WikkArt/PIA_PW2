const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Agregar a guardados
router.post("/", async (req, res) => {
  const { id_usuario, id_post } = req.body;
  try {
    const favorito = await prisma.favoritos.upsert({
      where: {
        unique_favorito_usuario_post: { id_usuario, id_post }
      },
      update: { activo: true, fecha_guardado: new Date() },
      create: { id_usuario, id_post }
    });
    res.json(favorito);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Quitar de guardados (eliminar registro)
router.delete("/eliminar", async (req, res) => {
  const { id_usuario, id_post } = req.body;
  try {
    const favorito = await prisma.favoritos.delete({
      where: {
        unique_favorito_usuario_post: { id_usuario, id_post }
      }
    });
    res.json(favorito);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener posts guardados del usuario
router.get("/usuario/:id_usuario", async (req, res) => {
  const id_usuario = Number(req.params.id_usuario);
  try {
    const favoritos = await prisma.favoritos.findMany({
      where: { id_usuario },
      include: {
        post: {
          include: {
            usuario: true,
            categoria: true,
            comentarios: {
              include: { usuario: true }
            }
          }
        }
      }
    });

    res.json(favoritos.map(fav => fav.post));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Verificar si un post está guardado por el usuario
router.get("/usuario/:id_usuario/post/:id_post", async (req, res) => {
  const id_usuario = Number(req.params.id_usuario);
  const id_post = Number(req.params.id_post);
  try {
    const favorito = await prisma.favoritos.findUnique({
      where: {
        unique_favorito_usuario_post: { id_usuario, id_post }
      }
    });
    res.json({ activo: !!favorito });
  } catch (error) {
    res.json({ activo: false });
  }
});

module.exports = router;