function carregar_img(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let mensagem = document.getElementById('mensagem');
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;
    let nome_usuario = prompt("Qual o seu nome?\n")

    if( hora >= 0 && hora <= 12 ) {
        img.src = "Imagens/morning.jpg";
        mensagem.innerHTML = `Bom dia, ${nome_usuario}!`;
        document.body.style.background = '#BA9C18';
    } else if ( hora > 12 && hora <= 18 ) {
        img.src = "Imagens/afternoon.jpg";
        document.body.style.background = '#9B440F';
        mensagem.innerHTML = `Boa tarde, ${nome_usuario}!`;
    } else {
        img.src = "Imagens/nigth.jpg";
        document.body.style.background = '#362A42';
        mensagem.innerHTML = `Boa noite, ${nome_usuario}!`;
    }
    
}
