# Coffee Delivery

https://didierpg-coffee-delivery.vercel.app/

Coffee Delivery é uma aplicação de entrega de café criada para praticar os conceitos aprendidos em aulas de **React**. O objetivo deste projeto é construir uma aplicação completa, desde a configuração inicial até o desenvolvimento de funcionalidades avançadas, utilizando **React**, **TypeScript**, **Styled Components**, e outras tecnologias.

## Tecnologias Utilizadas

- **React** (com Hooks)
- **TypeScript**
- **Styled Components**
- **Vite** como bundler
- **React Router** para navegação
- **Context API** e **Reducers** para gerenciamento de estado
- **LocalStorage** para persistência de dados

## Funcionalidades

- **Home**: Exibe uma lista de cafés disponíveis.
- **Checkout**: Adiciona cafés ao carrinho e permite a visualização dos itens.
- **Success**: Finaliza o pedido, mostrando os detalhes e o prazo de entrega.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```bash
public/
├── assets/
src/
├── App/
│   ├── components/
│   │   ├── FloatingMessage/
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   │   ├── InputNumber/
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── components/
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   │   ├── Checkout/
│   │   │   ├── components/
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   │   ├── Success/
│   │   │   ├── components/
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   ├── contexts/
│   │   ├── Order/
│   │   │   ├── actions/
│   │   │   ├── context/
│   │   │   ├── data/
│   │   │   ├── index/
│   │   │   ├── Provider.tsx/
│   │   │   ├── reducer.ts/
│   │   │   ├── types.ts/
├── styles/
│   ├── global.ts
│   ├── theme.ts
├── main.tsx
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
- [Milestone 2: Configuração de Rotas](https://github.com/didierpg/coffee-delivery/milestone/2)
- [Milestone 3: Construção Visual](https://github.com/didierpg/coffee-delivery/milestone/3)
- [Milestone 4: Gerenciamento de Estado](https://github.com/didierpg/coffee-delivery/milestone/4)
- [Milestone 5: Funcionalidades](https://github.com/didierpg/coffee-delivery/milestone/5)
- [Milestone 6: Polimento Final](https://github.com/didierpg/coffee-delivery/milestone/6)

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
