const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Crear o actualizar puntuación (like/dislike)
router.post("/", async (req, res) => {
  const { id_usuario, id_post, valor } = req.body; 
  try {
    const puntuacion = await prisma.puntuacion.upsert({
      where: {
        unique_puntuacion_usuario_post: {
          id_usuario,
          id_post,
        },
      },
      update: { valor, fecha_puntuacion: new Date() },
      create: { id_usuario, id_post, valor },
    });
    res.json(puntuacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener conteo de likes/dislikes de un post
router.get("/post/:id_post", async (req, res) => {
  const id_post = Number(req.params.id_post);
  const likes = await prisma.puntuacion.count({ where: { id_post, valor: 1 } });
  const dislikes = await prisma.puntuacion.count({ where: { id_post, valor: -1 } });
  res.json({ likes, dislikes });
});

// Obtener la puntuación del usuario para un post
router.get("/user/:id_usuario/post/:id_post", async (req, res) => {
  const id_usuario = Number(req.params.id_usuario);
  const id_post = Number(req.params.id_post);
  const puntuacion = await prisma.puntuacion.findUnique({
    where: {
      unique_puntuacion_usuario_post: { id_usuario, id_post },
    },
  });
  res.json(puntuacion);
});

// Obtener posts que el usuario ha dado like
router.get('/likes/:id_usuario', async (req, res) => {
  const id_usuario = Number(req.params.id_usuario);
  const likes = await prisma.puntuacion.findMany({
    where: { id_usuario, valor: 1 },
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
  res.json(likes.map(like => like.post));
});

module.exports = router;