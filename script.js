// Função para alternar o idioma exibido
function switchLang(lang) {
  // Definir a classe do body como 'lang-xx' (pt, en ou es)
  document.body.className = 'lang-' + lang;
  // Atualizar classes "active" dos botões de idioma
  document.getElementById('btn-pt').classList.remove('active');
  document.getElementById('btn-en').classList.remove('active');
  document.getElementById('btn-es').classList.remove('active');
  document.getElementById('btn-' + lang).classList.add('active');
}

// Ao carregar a página, podemos assegurar que apenas o idioma padrão PT esteja visível
// (As classes CSS .en e .es já estão ocultas via CSS quando body.lang-pt)
