import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient()
 
// Ejemplo de creación de usuario
async function createUser() {
  const newUser = await prisma.usuario.create({
    data: {
      nombre: 'Ejemplo',
      email: 'ejemplo@email.com',
      contraseña: 'password123'
    }
  })
  console.log('Usuario creado:', newUser)
}
 
// Ejemplo de consulta
async function getUsers() {
  const users = await prisma.usuario.findMany()
  console.log('Todos los usuarios:', users)
}
 
// No olvides cerrar la conexión cuando termines
async function main() {
  await createUser()
  await getUsers()
  await prisma.$disconnect()
}
 
main().catch(e => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})