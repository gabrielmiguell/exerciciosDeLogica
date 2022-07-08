function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora =  12//ata.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!!
        img.src = 'imgs/fotoManha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!!
        img.src = 'imgs/fotoTarde.jpg'
    } else {
        //Boa Noite!!
        img.src = 'imgs/fotoNoite.jpg'
    }

}