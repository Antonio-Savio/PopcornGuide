<h1 align="center"> PopcornGuide</h1>

<ul>
  <li><a href="#pt">🇧🇷 Português</a></li>
  <li><a href="#eng">🇬🇧 English</a></li>
</ul>

<h3 align="center">Versão em português</h3>

<section id="pt">

Plataforma que lista os filmes em destaque no momento. Pesquise os seus filmes prediletos, faça login com sua conta Google, ou Twitter, e adicione aos favoritos clicando no ♥️. Você pode ver os filmes salvos na opção ‘Favorites’. Cada filme possui um página com detalhes, tais como descrição do filme, ano de lançamento, duração, gêneros e número de estrelas.

## 🌎 Acesse a plataforma
[PopcornGuide](https://popcorn-guide.vercel.app/)

## 💻 Visão Geral
<img src="public/popcornguide.gif" alt="Prévia PopcornGuide" />
<img width="350px" src="public/popcornguide-mobile.gif"alt="Prévia em celular PopcornGuide" />

## ✅ Funcionalidades
- Consumo da API do TMDB.
- Tela principal com filmes em destaque do momento.
- Paginação.
- Pesquisa de filmes por palavras-chave.
- Login social com o Google e Twitter usando Nextauth.js.
- Botão em formato de coração para salvar filmes favoritos.
- Os filmes salvos são armazenados em um banco no Firebase e exibidos na página de 'Favorites' em ordem de data de salvamento.
- Apenas usuários logados podem salvar os favoritos.
- Caso o usuário não logado tente acessar a aba de 'Favorites', ou clique no '♥️' , ele será redirecionado para tela de login.
- Página de detalhes, com dados como ano de lançamento, duração, gêneros, países de produção, número de estrelas e o mesmo botão de Favorito.
- Componentes de card do filme, input de pesquisa,  botão de favorito e header reaproveitados em páginas diferentes.
- Metadatas dinâmicas para cada filme.
- Loader animado.

## ⚙️ Tecnologias
- Next.js: framework React que permite criação nativa de rotas e renderização ao lado do servidor. Junto com todas as funcionalidades do React, se torna uma poderosa ferramenta front-end.
- Nextauth.js: para criar autenticação de usuários com login social usando os providers do Google e Twitter (X).
- TypeScript: garante a segurança de tipos, detecta erros durante o desenvolvimento, melhora a qualidade do código e aumenta a produtividade.
- Firebase: foi usado o Cloud Firebase, um banco não-relacional para armazenar dados dos filmes favoritos.
- Tailwind CSS: framework CSS baseado em classes. Usado para estilizar os componentes e definir layout flexbox/grid.
- API do The Movie Database (TMDB): API com diversos endpoints com imagens e dados de filmes.

## 🚀 Como rodar o projeto
  ### Requisitos
  - Node.js instalado
  - Gerenciador de pacotes npm ou yarn

### Passo a passo
1. Clone o repositório:

```bash
git clone https://github.com/Antonio-Savio/PopcornGuide.git
```
2. Instale as dependências:

```bash
cd PopcornGuide
npm install
```

3. Crie um arquivo .env na raiz do projeto e adicione todas suas configurações da API, providers de autenticação, do NextAuth.js e Firebase:
```bash
NEXT_API_URL=https://api.themoviedb.org/3
NEXT_IMAGE_URL=https://image.tmdb.org/t/p/original
NEXT_API_KEY='YOUR_API_KEY_HERE'

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET='YOUR_NEXTAUTH_SECRET'

GOOGLE_CLIENT_ID='YOUR_GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET='YOUR_GOOGLE_CLIENT_SECRET'

TWITTER_CLIENT_ID='YOUR_TWITTER_CLIENT_ID'
TWITTER_CLIENT_SECRET='YOUR_TWITTER_CLIENT_SECRET'

NEXT_PUBLIC_FIREBASE_API_KEY='YOUR_API_KEY_HERE'
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN='YOUR_AUTH_DOMAIN_HERE'
NEXT_PUBLIC_FIREBASE_PROJECT_ID='YOUR_PROJECT_ID_HERE'
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET='YOUR_STORAGE_BUCKET_HERE'
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID='YOUR_MESSAGING_SENDER_ID_HERE'
NEXT_PUBLIC_FIREBASE_APP_ID='YOUR_APP_ID_HERE'
```

4. Rode o projeto localmente:

```bash
npm run dev
```
5. Acesse a aplicação em: http://localhost:3000.

## 📄 Licença
Este projeto é licenciado sob a [Licença MIT](LICENSE).

Você é livre para usar, modificar e distribuir este software para fins pessoais e comerciais, desde que a licença original e o aviso de direitos autorais sejam incluídos. Não há garantia para o código fornecido, e o autor não é responsável por quaisquer problemas decorrentes do uso deste software.

</section>

<br/>

---
<br/>

<h3 align="center">English version</h3>

<section id="eng">

Platform that lists the currently trending movies. Search for your favorite movies, log in with your Google or Twitter account, and add to your favorites by clicking on the ♥️. You can view saved movies in the 'Favorites' option. Each movie has a details page with information such as movie description, release year, length, genres, and number of stars.

## 🌎 Access the platform
[PopcornGuide](https://popcorn-guide.vercel.app/)

## 💻 Overview
<img src="public/popcornguide.gif" alt="PopcornGuide Preview" />
<img width="350px" src="public/popcornguide-mobile.gif" alt="PopcornGuide Mobile Preview" />

## ✅ Features:
- Consumption of the TMDB API.
- Main page with currently trending movies.
- Pagination.
- Movie search by keywords.
- Social login with Google and Twitter using Nextauth.js.
- Heart-shaped button to save favorite movies.
- Saved movies are stored in a Firebase database and displayed on the 'Favorites' page in order of the date they were saved.
- Only logged-in users can save favorites.
- If a non-logged-in user tries to access the 'Favorites' tab or clicks on the '♥️' button, they will be redirected to the login page.
- Details page with information such as release year, duration, genres, production countries, number of stars, and the same Favorite button.
- Reusable components for movie cards, search input, and favorite button across different pages.
- Dynamic metadata for each movie.
- Animated loader.

## ⚙️ Technologies
- Next.js: React framework that enables native route creation and server-side rendering. Together with all React functionalities, it becomes a powerful front-end tool.
- Nextauth.js: to create user authentication with social login using Google and Twitter (X) providers.
- TypeScript: ensures type safety, catches errors during development, improves code quality, and increases productivity.
- Firebase: Cloud Firebase was used, a non-relational database to store data of favorite movies.
- Tailwind CSS: class-based CSS framework. Used to style components and define flexbox/grid layout.
- The Movie Database (TMDB) API: API with various endpoints providing images and data of movies.

## 🚀 How to run the project
### Requirements
- Node.js installed
- Package manager npm or yarn

### Steps
1. Clone the repository:

```bash
git clone https://github.com/Antonio-Savio/PopcornGuide.git
```
2. Install the dependencies:

```bash
cd PopcornGuide
npm install
```

3. Create a .env file at the root of the project and add all your API settings, authentication providers, NextAuth.js, and Firebase configurations:
```bash
NEXT_API_URL=https://api.themoviedb.org/3
NEXT_IMAGE_URL=https://image.tmdb.org/t/p/original
NEXT_API_KEY='YOUR_API_KEY_HERE'

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET='YOUR_NEXTAUTH_SECRET'

GOOGLE_CLIENT_ID='YOUR_GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET='YOUR_GOOGLE_CLIENT_SECRET'

TWITTER_CLIENT_ID='YOUR_TWITTER_CLIENT_ID'
TWITTER_CLIENT_SECRET='YOUR_TWITTER_CLIENT_SECRET'

NEXT_PUBLIC_FIREBASE_API_KEY='YOUR_API_KEY_HERE'
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN='YOUR_AUTH_DOMAIN_HERE'
NEXT_PUBLIC_FIREBASE_PROJECT_ID='YOUR_PROJECT_ID_HERE'
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET='YOUR_STORAGE_BUCKET_HERE'
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID='YOUR_MESSAGING_SENDER_ID_HERE'
NEXT_PUBLIC_FIREBASE_APP_ID='YOUR_APP_ID_HERE'
```

4. Run the project locally:

```bash
npm run dev
yarn dev
```
5. Access the application at: http://localhost:3000.

## License 📄

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this software for personal and commercial purposes, as long as the original license and copyright notice are included. There is no warranty for the code provided, and the author is not liable for any issues arising from the use of this software.

</section>