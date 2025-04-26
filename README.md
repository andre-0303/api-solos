
# 🎸 API de Solos de Rock 

Bem-vindo à API do projeto **Discos-Zidas**!  
Aqui você encontra uma lista dos melhores **solos de rock and roll**, com informações como **nome do solo**, **banda**, **imagem da capa** e **áudio**.

---

## 🚀 Endpoints

### 🔹 Listar todos os solos

**GET** `/api/solos`

- Retorna uma lista de todos os solos disponíveis.

#### Exemplo de resposta:

```json
[
  {
    "_id": "6627c4d10ee4b826cdb3a8df",
    "nome": "Stairway to Heaven",
    "banda": "Led Zeppelin",
    "imagem": "uploads/stairway.jpg",
    "audio": "uploads/stairway.mp3"
  },
  {
    "_id": "6627c4d10ee4b826cdb3a8e0",
    "nome": "Comfortably Numb",
    "banda": "Pink Floyd",
    "imagem": "uploads/comfortably.jpg",
    "audio": "uploads/comfortably.mp3"
  }
]
```

---

## 📦 Estrutura do objeto Solo

| Campo    | Tipo   | Descrição                      |
| -------- | ------ | ------------------------------- |
| `_id`    | string | ID único gerado pelo MongoDB     |
| `nome`   | string | Nome do solo/música              |
| `banda`  | string | Nome da banda                   |
| `imagem` | string | Caminho da imagem do solo        |
| `audio`  | string | Caminho do arquivo de áudio      |

---

## ⚙️ Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o seu arquivo `.env` com as variáveis necessárias (exemplo de variáveis de conexão com MongoDB).

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

- A API estará disponível em: `http://localhost:3001/api/solos`

---

## 🗂️ Tecnologias usadas

- **Node.js**  
- **Express**  
- **MongoDB** (com **Mongoose**)  
- **Multer** (para upload de imagens e áudios)

---

## 🎨 Frontend relacionado

Este backend foi criado para ser consumido pelo frontend do projeto **Discos-Zidas** desenvolvido com:

- **Next.js**
- **Tailwind CSS**
- **TypeScript**

---

## ✨ Melhorias futuras

- Filtros de solos por banda.
- Upload de novos solos via painel administrativo.
- Melhor tratamento de erros.
- Sistema de favoritos e playlists.

---

## 🧑‍💻 Autor
Feito com ❤️ por [BandeiraDev]  
