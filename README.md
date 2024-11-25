# Coffee Delivery

Coffee Delivery é uma aplicação de entrega de café criada para praticar os conceitos aprendidos em aulas de **React**. O objetivo deste projeto é construir uma aplicação completa, desde a configuração inicial até o desenvolvimento de funcionalidades avançadas, utilizando **React**, **TypeScript**, **Styled Components**, e outras tecnologias.

## Tecnologias Utilizadas

- **React** (com Hooks)
- **TypeScript**
- **Styled Components**
- **Vite** como bundler
- **ESLint** para linting e formatação
- **React Router** para navegação
- **Context API** e **Reducers** para gerenciamento de estado
- **LocalStorage** para persistência de dados

## Funcionalidades

- **Home**: Exibe uma lista de cafés disponíveis.
- **Carrinho**: Adiciona cafés ao carrinho e permite a visualização dos itens.
- **Checkout**: Finaliza o pedido, mostrando os detalhes e o prazo de entrega.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```bash
src/
├── App/
│   ├── components/                # Componentes reutilizáveis em todo o app
│   │   ├── Content/               # Componente Content
│   │   │   ├── components/        # Componentes específicos do Content
│   │   │   ├── contexts/          # Context API do Content
│   │   │   ├── reducers/          # Reducers do Content
│   │   │   ├── index.tsx          # Arquivo principal do Content
│   │   │   ├── styled.ts          # Estilos do Content
│   │   ├── Header/                # Componente Header
│   │   │   ├── components/        # Componentes específicos do Header
│   │   │   ├── context/           # Context API do Header
│   │   │   ├── reducers/          # Reducers do Header
│   │   │   ├── index.tsx          # Arquivo principal do Header
│   │   │   ├── styled.ts          # Estilos do Header
│   ├── pages/                     # Páginas principais do app
│   │   ├── Home/                  # Página Home
│   │   │   ├── components/        # Componentes específicos da Home
│   │   │   ├── contexts/          # Context API da Home
│   │   │   ├── reducers/          # Reducers da Home
│   │   │   ├── index.tsx          # Arquivo principal da Home
│   │   │   ├── styled.ts          # Estilos da Home
│   │   ├── Cart/                  # Página do Carrinho
│   │   │   ├── components/        # Componentes específicos do Carrinho
│   │   │   ├── contexts/          # Context API do Carrinho
│   │   │   ├── reducers/          # Reducers do Carrinho
│   │   │   ├── index.tsx          # Arquivo principal do Carrinho
│   │   │   ├── styled.ts          # Estilos do Carrinho
│   │   ├── Checkout/              # Página de Checkout
│   │   │   ├── components/        # Componentes específicos do Checkout
│   │   │   ├── contexts/          # Context API do Checkout
│   │   │   ├── reducers/          # Reducers do Checkout
│   │   │   ├── index.tsx          # Arquivo principal do Checkout
│   │   │   ├── styled.ts          # Estilos do Checkout
│   ├── contexts/                  # Contextos globais (ex: tema, autenticação, etc.)
│   ├── reducers/                  # Reducers globais
│   ├── index.tsx                  # Ponto de entrada do App
│   ├── styled.ts                  # Estilos globais do App
├── assets/                        # Arquivos estáticos (imagens, fontes, etc.)
```

## Como Rodar o Projeto Localmente

1. Clone o repositório:
```bash
git clone https://github.com/didierpg/coffee-delivery.git
```

2. Navegue até a pasta do projeto:

```bash
cd coffee-delivery
```
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse o projeto no navegador:

A aplicação estará disponível em http://localhost:3000.

## Desenvolvimento
- [Commits](https://github.com/didierpg/coffee-delivery/commits/main/)
- [Milestone 1: Configuração Inicial](https://github.com/didierpg/coffee-delivery/milestone/1)

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

---

Autor: Didier Braz Ferreira

GitHub: didierpg


### Explicação das Seções:
1. **Descrição do projeto**: Um breve resumo do que é a aplicação e qual seu propósito (praticar React).
2. **Tecnologias Utilizadas**: Lista das tecnologias que você está utilizando no projeto, o que pode ser útil para qualquer desenvolvedor que queira colaborar ou entender o projeto.
3. **Funcionalidades**: Descrição das funcionalidades principais do projeto, para que qualquer pessoa entenda o que a aplicação faz.
4. **Estrutura do Projeto**: Explica a estrutura de diretórios para que quem for visualizar o código tenha uma ideia de onde está o que.
5. **Como Rodar o Projeto Localmente**: Passo a passo para rodar a aplicação em uma máquina local, desde o clone até a execução.
6. **Desenvolvimento**: Links para acompanhar o progresso do projeto, com links para as milestones e commits.
7. **Licença**: Para deixar claro qual é a licença de uso do projeto.
