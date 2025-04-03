// insertData.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
 
async function main() {
  // Ejemplo 1: Insertar un nuevo usuario
  const newUser = await prisma.usuario.create({
    data: {
      nombre: "Andrea Mendoza",
      email: "andy@gmail.com",
      contraseña: "claveSegura123",
      avatar: "/avatars/andrea.jpg"
    }
  })
  console.log('Usuario creado:', newUser)
 
  // Ejemplo 2: Insertar una categoría
  const newCategory = await prisma.categoria.create({
    data: {
      nombre: "Flores",
      descripcion: "Categoría para ver ilustraciones de flores",
      tipo_categoria: "Original"
    }
  })
  console.log('Categoría creada:', newCategory)
 
  // Ejemplo 3: Insertar un post relacionado con el usuario y categoría
  const newPost = await prisma.post.create({
    data: {
      titulo: "Mi pixel art",
      descripcion: "Aprendiendo a dibujar margaritas",
      url_archivo: "/uploads/margarita.png",
      tipo: "PNG",
      id_usuario: newUser.id_usuario,
      id_categoria: newCategory.id_categoria
    }
  })
  console.log('Post creado:', newPost)
}
 
main()
  .catch(e => {
    console.error("Error al insertar datos:", e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })