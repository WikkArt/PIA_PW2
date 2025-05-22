const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

const authRoutes = require('./routes/auth');
const categoriasRoutes = require('./routes/categorias');

app.use(cors()); 
app.use(express.json());
app.use('/uploads/avatars', express.static(path.join(__dirname, 'uploads/avatars')));

const uploadsDir = path.join(__dirname, 'uploads/avatars');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use('/auth', authRoutes); 
app.use('/categorias', categoriasRoutes);

app.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001');
});