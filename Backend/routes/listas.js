const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/listas/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Crear una nueva lista con imagen
router.post("/", upload.single("portada"), async (req, res) => {
  const { id_usuario, nombre, descripcion } = req.body;
  let portada = null;
  if (req.file) {
    portada = "/uploads/listas/" + req.file.filename;
  }
  try {
    const nuevaLista = await prisma.lista.create({
      data: {
        id_usuario: Number(id_usuario),
        nombre,
        descripcion,
        portada,
      },
    });
    res.json(nuevaLista);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las listas de un usuario
router.get("/usuario/:id_usuario", async (req, res) => {
  const id_usuario = Number(req.params.id_usuario);
  try {
    const listas = await prisma.lista.findMany({
      where: { id_usuario, activo: true },
      include: {
        usuario: true, 
        posts: { 
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
        }
      },
      orderBy: { fecha_creacion: "desc" },
    });
    res.json(listas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Agregar un post a una lista
router.post("/agregarPost", async (req, res) => {
  const { id_lista, id_post } = req.body;
  try {
    const nuevo = await prisma.lista_Post.create({
      data: {
        id_lista: Number(id_lista),
        id_post: Number(id_post),
      },
    });
    res.json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener 
router.get("/post/:id_post", async (req, res) => {
  const id_post = Number(req.params.id_post);
  try {
    const listas = await prisma.lista_Post.findMany({
      where: { id_post },
      select: { id_lista: true }
    });
    res.json(listas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/quitarPost", async (req, res) => {
  const { id_lista, id_post } = req.body;
  try {
    await prisma.lista_Post.delete({
      where: {
        id_lista_id_post: {
          id_lista: Number(id_lista),
          id_post: Number(id_post),
        },
      },
    });
    res.json({ ok: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;