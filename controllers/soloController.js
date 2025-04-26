import Solo from "../models/Solo.js";

// Função para criar um solo
export const createSolo = async (req, res) => {
  const { nome, banda, descricao } = req.body;
  const imagem = req.files["imagem"]?.[0]?.path;
  const audio = req.files["audio"]?.[0]?.path;

  try {
    const novoSolo = new Solo({ nome, banda, descricao, imagem, audio });
    await novoSolo.save();
    res.status(201).json(novoSolo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar solo", error });
  }
};

// Função para listar todos os solos
export const getSolos = async (req, res) => {
  try {
    const solos = await Solo.find(); // Buscando todos os solos no banco
    res.json(solos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar solos", error });
  }
};

// Função para atualizar um solo
export const updateSolo = async (req, res) => {
  const { id } = req.params;
  const { nome, banda, descricao } = req.body;

  try {
    const solo = await Solo.findById(id);
    if (!solo) {
      return res.status(404).json({ message: "Solo não encontrado" });
    }

    // Atualizando os campos do solo
    solo.nome = nome || solo.nome;
    solo.banda = banda || solo.banda;
    solo.descricao = descricao || solo.descricao;

    // Verificando se há novos arquivos de imagem ou áudio
    if (req.files["imagem"]) {
      solo.imagem = req.files["imagem"][0].path;
    }
    if (req.files["audio"]) {
      solo.audio = req.files["audio"][0].path;
    }

    await solo.save();
    res.status(200).json(solo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar solo", error });
  }
};

// Função para excluir um solo
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
