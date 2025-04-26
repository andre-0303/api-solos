import { Router } from "express";
const router = Router();
import multer, { diskStorage } from "multer";
import { extname } from "path";
import {
  createSolo,
  getSolos,
  updateSolo,
  deleteSolo,
} from "../controllers/soloController.js";

// Configuração do Multer para upload de arquivos
const storage = diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith("audio")
      ? "uploads/audios"
      : "uploads/images";
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + extname(file.originalname));
  },
});

const upload = multer({ storage });

// Rota POST para criar um solo
router.post(
  "/",
  upload.fields([
    { name: "imagem", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  createSolo
);

// Rota GET para listar todos os solos
router.get("/", getSolos);

// Rota PUT para atualizar um solo
router.put(
  "/:id",
  upload.fields([
    { name: "imagem", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  updateSolo
);

// Rota DELETE para excluir um solo
router.delete("/:id", deleteSolo);

export default router;
