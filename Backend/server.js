const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

const authRoutes = require('./routes/auth');
const categoriasRoutes = require('./routes/categorias');
const usuariosRoutes = require('./routes/usuarios');
const postsRoutes = require('./routes/posts');
const comentariosRouter = require('./routes/comentarios');
const puntuacionesRouter = require('./routes/puntuaciones');

app.use(cors()); 
app.use(express.json());
app.use('/uploads/avatars', express.static(path.join(__dirname, 'uploads/avatars')));
app.use('/uploads/posts', express.static(path.join(__dirname, 'uploads/posts')));


app.use('/auth', authRoutes); 
app.use('/categorias', categoriasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/posts', postsRoutes);
app.use('/comentarios', comentariosRouter);
app.use('/puntuaciones', puntuacionesRouter);

app.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001');
});