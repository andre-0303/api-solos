import Solo from "../models/Solo.js";

// Função para criar um novo solo
export const createSolo = async (req, res) => {
  const { nome, banda } = req.body;
  const imagem = req.files["imagem"]?.[0]?.path;
  const audio = req.files["audio"]?.[0]?.path;

  const novoSolo = new Solo({ nome, banda, imagem, audio });
  await novoSolo.save();
  res.status(201).json(novoSolo);
};

// Função para obter todos os solos
export const getSolos = async (req, res) => {
  const solos = await Solo.find();
  res.json(solos);
};

// Função para atualizar um solo existente
export const updateSolo = async (req, res) => {
  const { id } = req.params;
  const { nome, banda } = req.body;
  const imagem = req.files["imagem"]?.[0]?.path;
  const audio = req.files["audio"]?.[0]?.path;

  try {
    const solo = await Solo.findById(id);

    if (!solo) {
      return res.status(404).json({ message: "Solo não encontrado" });
    }

    solo.nome = nome || solo.nome;
    solo.banda = banda || solo.banda;
    solo.imagem = imagem || solo.imagem;
    solo.audio = audio || solo.audio;

    await solo.save();
    res.json(solo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar solo", error });
  }
};

// Função para excluir um solo existente
export const deleteSolo = async (req, res) => {
  const { id } = req.params;

  try {
    const solo = await Solo.findByIdAndDelete(id);

    if (!solo) {
      return res.status(404).json({ message: "Solo não encontrado" });
    }

    res.status(200).json({ message: "Solo excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir solo", error });
  }
};
