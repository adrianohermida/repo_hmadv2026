/**
 * blog.js
 * Responsável por:
 * - Listar posts no blog/index.html
 * - Centralizar dados no posts.js
 * - Garantir zero CLS e ótimo INP
 * - Manter arquitetura 100% estática
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     VERIFICA SE EXISTE LISTA DE POSTS NA PÁGINA
  ===================================================== */
  const blogList = document.getElementById('blog-list');
  if (!blogList || typeof posts === 'undefined') return;

  /* =====================================================
     RENDERIZAÇÃO DOS POSTS
  ===================================================== */
  const fragment = document.createDocumentFragment();

  posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'hm-post-card';

    article.innerHTML = `
      <h3>${post.titulo}</h3>
      <p>${post.resumo || ''}</p>
      <a href="${post.url}">Ler artigo</a>
    `;

    fragment.appendChild(article);
  });

  blogList.appendChild(fragment);

});