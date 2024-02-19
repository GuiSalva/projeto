function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se estiver no light mode, adicionar a imagem light
    img.setAttribute('src', './assets/assets/avatar-light.png')
    img.setAttribute('alt', 'Imagem do Mayk Brito de óculos escuro')
  } else {
    // se estiver sem light mode, manter a imagem original
    img.setAttribute('src', './assets/assets/avatar.png')
    img.setAttribute('alt', 'Imagem do Mayk Brito')
  }
}