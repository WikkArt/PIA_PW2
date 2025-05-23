-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
    CONSTRAINT "Post_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("descripcion", "fecha_subida", "id_categoria", "id_post", "id_usuario", "tipo", "titulo", "url_archivo") SELECT "descripcion", "fecha_subida", "id_categoria", "id_post", "id_usuario", "tipo", "titulo", "url_archivo" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE INDEX "idx_post_usuario" ON "Post"("id_usuario");
CREATE INDEX "idx_post_categoria" ON "Post"("id_categoria");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
