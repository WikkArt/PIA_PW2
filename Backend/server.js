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
const favoritosRouter = require('./routes/favoritos');
const listasRouter = require('./routes/listas');
const admiRouter = require('./routes/admi');
app.use(cors()); 
app.use(express.json());
app.use('/uploads/avatars', express.static(path.join(__dirname, 'uploads/avatars')));
app.use('/uploads/posts', express.static(path.join(__dirname, 'uploads/posts')));
app.use('/uploads/listas', express.static(path.join(__dirname, 'uploads/listas')));

app.use('/auth', authRoutes); 
app.use('/categorias', categoriasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/posts', postsRoutes);
app.use('/comentarios', comentariosRouter);
app.use('/puntuaciones', puntuacionesRouter);
app.use('/favoritos', favoritosRouter);
app.use('/listas', listasRouter);
app.use('/admi', admiRouter);

app.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001');
});