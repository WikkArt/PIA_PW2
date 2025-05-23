-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "id_categoria" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "tipo_categoria" TEXT NOT NULL,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Categoria" ("descripcion", "fecha_creacion", "id_categoria", "nombre", "tipo_categoria") SELECT "descripcion", "fecha_creacion", "id_categoria", "nombre", "tipo_categoria" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");
CREATE INDEX "idx_categoria_nombre" ON "Categoria"("nombre");
CREATE TABLE "new_Comentario" (
    "id_comentario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_comentario" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comentario_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comentario" ("contenido", "fecha_comentario", "id_comentario", "id_post", "id_usuario") SELECT "contenido", "fecha_comentario", "id_comentario", "id_post", "id_usuario" FROM "Comentario";
DROP TABLE "Comentario";
ALTER TABLE "new_Comentario" RENAME TO "Comentario";
CREATE INDEX "idx_comentario_post" ON "Comentario"("id_post");
CREATE TABLE "new_Favoritos" (
    "id_favorito" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "fecha_guardado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Favoritos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favoritos_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Favoritos" ("fecha_guardado", "id_favorito", "id_post", "id_usuario") SELECT "fecha_guardado", "id_favorito", "id_post", "id_usuario" FROM "Favoritos";
DROP TABLE "Favoritos";
ALTER TABLE "new_Favoritos" RENAME TO "Favoritos";
CREATE INDEX "idx_favorito_usuario" ON "Favoritos"("id_usuario");
CREATE UNIQUE INDEX "Favoritos_id_usuario_id_post_key" ON "Favoritos"("id_usuario", "id_post");
CREATE TABLE "new_Lista" (
    "id_lista" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Lista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lista" ("descripcion", "fecha_creacion", "id_lista", "id_usuario", "nombre") SELECT "descripcion", "fecha_creacion", "id_lista", "id_usuario", "nombre" FROM "Lista";
DROP TABLE "Lista";
ALTER TABLE "new_Lista" RENAME TO "Lista";
CREATE INDEX "idx_lista_usuario" ON "Lista"("id_usuario");
CREATE TABLE "new_Usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "fecha_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Usuario" ("avatar", "email", "fecha_registro", "id_usuario", "nombre", "password") SELECT "avatar", "email", "fecha_registro", "id_usuario", "nombre", "password" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
CREATE INDEX "idx_usuario_email" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
