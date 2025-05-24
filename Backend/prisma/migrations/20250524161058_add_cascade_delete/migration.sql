-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comentario" (
    "id_comentario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_comentario" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comentario_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comentario" ("activo", "contenido", "fecha_comentario", "id_comentario", "id_post", "id_usuario") SELECT "activo", "contenido", "fecha_comentario", "id_comentario", "id_post", "id_usuario" FROM "Comentario";
DROP TABLE "Comentario";
ALTER TABLE "new_Comentario" RENAME TO "Comentario";
CREATE INDEX "idx_comentario_post" ON "Comentario"("id_post");
CREATE TABLE "new_Favoritos" (
    "id_favorito" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "fecha_guardado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Favoritos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Favoritos_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Favoritos" ("activo", "fecha_guardado", "id_favorito", "id_post", "id_usuario") SELECT "activo", "fecha_guardado", "id_favorito", "id_post", "id_usuario" FROM "Favoritos";
DROP TABLE "Favoritos";
ALTER TABLE "new_Favoritos" RENAME TO "Favoritos";
CREATE INDEX "idx_favorito_usuario" ON "Favoritos"("id_usuario");
CREATE UNIQUE INDEX "Favoritos_id_usuario_id_post_key" ON "Favoritos"("id_usuario", "id_post");
CREATE TABLE "new_HistorialBusqueda" (
    "id_busqueda" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "termino_busqueda" TEXT NOT NULL,
    "fecha_busqueda" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "HistorialBusqueda_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_HistorialBusqueda" ("fecha_busqueda", "id_busqueda", "id_usuario", "termino_busqueda") SELECT "fecha_busqueda", "id_busqueda", "id_usuario", "termino_busqueda" FROM "HistorialBusqueda";
DROP TABLE "HistorialBusqueda";
ALTER TABLE "new_HistorialBusqueda" RENAME TO "HistorialBusqueda";
CREATE INDEX "idx_busqueda_usuario" ON "HistorialBusqueda"("id_usuario");
CREATE TABLE "new_Lista" (
    "id_lista" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "portada" TEXT,
    CONSTRAINT "Lista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Lista" ("activo", "descripcion", "fecha_creacion", "id_lista", "id_usuario", "nombre", "portada") SELECT "activo", "descripcion", "fecha_creacion", "id_lista", "id_usuario", "nombre", "portada" FROM "Lista";
DROP TABLE "Lista";
ALTER TABLE "new_Lista" RENAME TO "Lista";
CREATE INDEX "idx_lista_usuario" ON "Lista"("id_usuario");
CREATE TABLE "new_Post" (
    "id_post" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_categoria" INTEGER,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "url_archivo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha_subida" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Post_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Post_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("activo", "descripcion", "fecha_subida", "id_categoria", "id_post", "id_usuario", "tipo", "titulo", "url_archivo") SELECT "activo", "descripcion", "fecha_subida", "id_categoria", "id_post", "id_usuario", "tipo", "titulo", "url_archivo" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE INDEX "idx_post_usuario" ON "Post"("id_usuario");
CREATE INDEX "idx_post_categoria" ON "Post"("id_categoria");
CREATE TABLE "new_Puntuacion" (
    "id_puntuacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "fecha_puntuacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Puntuacion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Puntuacion_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Puntuacion" ("fecha_puntuacion", "id_post", "id_puntuacion", "id_usuario", "valor") SELECT "fecha_puntuacion", "id_post", "id_puntuacion", "id_usuario", "valor" FROM "Puntuacion";
DROP TABLE "Puntuacion";
ALTER TABLE "new_Puntuacion" RENAME TO "Puntuacion";
CREATE INDEX "idx_puntuacion_post" ON "Puntuacion"("id_post");
CREATE UNIQUE INDEX "Puntuacion_id_usuario_id_post_key" ON "Puntuacion"("id_usuario", "id_post");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
