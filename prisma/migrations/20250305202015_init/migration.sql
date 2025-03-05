-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "avatar" TEXT,
    "fecha_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "tipo_categoria" TEXT NOT NULL,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Post" (
    "id_post" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_categoria" INTEGER,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "url_archivo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha_subida" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Puntuacion" (
    "id_puntuacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "fecha_puntuacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Puntuacion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Puntuacion_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id_comentario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_comentario" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comentario_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favoritos" (
    "id_favorito" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "fecha_guardado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Favoritos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favoritos_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistorialBusqueda" (
    "id_busqueda" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "termino_busqueda" TEXT NOT NULL,
    "fecha_busqueda" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "HistorialBusqueda_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lista" (
    "id_lista" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Lista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lista_Post" (
    "id_lista" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,

    PRIMARY KEY ("id_lista", "id_post"),
    CONSTRAINT "Lista_Post_id_lista_fkey" FOREIGN KEY ("id_lista") REFERENCES "Lista" ("id_lista") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lista_Post_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post" ("id_post") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "idx_usuario_email" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");

-- CreateIndex
CREATE INDEX "idx_categoria_nombre" ON "Categoria"("nombre");

-- CreateIndex
CREATE INDEX "idx_post_usuario" ON "Post"("id_usuario");

-- CreateIndex
CREATE INDEX "idx_post_categoria" ON "Post"("id_categoria");

-- CreateIndex
CREATE INDEX "idx_puntuacion_post" ON "Puntuacion"("id_post");

-- CreateIndex
CREATE UNIQUE INDEX "Puntuacion_id_usuario_id_post_key" ON "Puntuacion"("id_usuario", "id_post");

-- CreateIndex
CREATE INDEX "idx_comentario_post" ON "Comentario"("id_post");

-- CreateIndex
CREATE INDEX "idx_favorito_usuario" ON "Favoritos"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Favoritos_id_usuario_id_post_key" ON "Favoritos"("id_usuario", "id_post");

-- CreateIndex
CREATE INDEX "idx_busqueda_usuario" ON "HistorialBusqueda"("id_usuario");

-- CreateIndex
CREATE INDEX "idx_lista_usuario" ON "Lista"("id_usuario");

-- CreateIndex
CREATE INDEX "idx_lista_post" ON "Lista_Post"("id_lista", "id_post");
