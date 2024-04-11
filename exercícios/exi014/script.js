function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  // var hora = 19;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM xDIA
    img.src = "imagens/Amanha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = "imagens/Tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    //Boa noite
    img.src = "imagens/Noite.png";
    document.body.style.background = "#515154";
  }
}
