function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar a tag img
  const img = document.querySelector("#profile img")
 
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a foto2
    img.setAttribute("src", "./assets/foto2.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar213.png")
  }
}
