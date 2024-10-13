function toggleMode() {
  
     const html = document.documentElement
     
     html.classList.toggle('Light')

     //pegar a tag img
     const img = document.querySelector("#profile img")
    
     //substituir a imagem

     if (html.classList.contains("Light")){
        img.setAttribute("src","./assets/avatar-light.png")
     }
    
     //se tiver sem light mode, manter a imagem normal
     else{
        img.setAttribute("src", "./assets/avatar.png")
     }
    }    
    
