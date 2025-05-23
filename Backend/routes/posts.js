const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");

// Configuración de multer para subir archivos de post
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/posts"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Crear un post
router.post("/crear", upload.single("archivo"), async (req, res) => {
  const { id_usuario, id_categoria, titulo, descripcion, tipo } = req.body;
  let url_archivo = null;
  if (req.file) {
    url_archivo = `/uploads/posts/${req.file.filename}`;
  }
  try {
    const post = await prisma.post.create({
      data: {
        id_usuario: Number(id_usuario),
        id_categoria: id_categoria ? Number(id_categoria) : null,
        titulo,
        descripcion,
        url_archivo,
        tipo,
        fecha_subida: new Date(),
      },
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener los posts de un usuario
router.get("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await prisma.post.findMany({
      where: { id_usuario: Number(id) },
      include: {
        usuario: true,
        categoria: true,
        comentarios: {
          include: {
            usuario: true
          }
        }
      },
      orderBy: { fecha_subida: "desc" },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Editar un post
router.put('/editar/:id', upload.single('archivo'), async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, tipo, id_categoria } = req.body;
  let data = {
    titulo,
    descripcion,
    tipo,
    id_categoria: id_categoria ? Number(id_categoria) : null,
  };
  if (req.file) {
    data.url_archivo = `/uploads/posts/${req.file.filename}`;
  }
  try {
    const post = await prisma.post.update({
      where: { id_post: Number(id) },
      data,
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener un post por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id_post: Number(id) },
      include: {
        usuario: true,
        categoria: true,
        comentarios: {
          include: {
            usuario: true
          }
        }
      }
    });
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
