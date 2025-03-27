// insertData.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
 
async function main() {
  // Ejemplo 1: Insertar un nuevo usuario
  const newUser = await prisma.usuario.create({
    data: {
      nombre: "Ana López",
      email: "ana@example.com",
      contraseña: "claveSegura123",
      avatar: "/avatars/ana.jpg"
    }
  })
  console.log('Usuario creado:', newUser)
 
  // Ejemplo 2: Insertar una categoría
  const newCategory = await prisma.categoria.create({
    data: {
      nombre: "Tutoriales",
      descripcion: "Categoría para tutoriales educativos",
      tipo_categoria: "educacion"
    }
  })
  console.log('Categoría creada:', newCategory)
 
  // Ejemplo 3: Insertar un post relacionado con el usuario y categoría
  const newPost = await prisma.post.create({
    data: {
      titulo: "Mi primer tutorial",
      descripcion: "Aprendiendo a usar Prisma con SQLite",
      url_archivo: "/uploads/tutorial-prisma.pdf",
      tipo: "documento",
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