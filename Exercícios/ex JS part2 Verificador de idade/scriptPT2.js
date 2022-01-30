function verificar(){
    let msg = document.getElementById('msg');
    let genero = document.querySelector('#form').sexo.value; //código: id + name (do input) + value (valor marcado pelo usuário);
    let ano_de_nascimento = document.getElementById('nascimento').value;
    let data = new Date();
    let ano = data.getFullYear();
    let idade_calculada = ano - ano_de_nascimento;
    let img = document.getElementById("photo");
    if ( genero == 'M'){
        if(idade_calculada < 18){
            img.src = "Masculino/menino.jpg";
            msg.innerHTML = `Detectamos um menino com ${idade_calculada} anos.`;
        } else if ( idade_calculada > 18 && idade_calculada < 60){
            img.src = "Masculino/homem.jpg";
            msg.innerHTML = `Detectamos um homem com ${idade_calculada} anos.`;
        } else {
            img.src = "Masculino/idoso.jpg";
            msg.innerHTML = `Detectamos um idoso com ${idade_calculada} anos.`
        }
    } else if ( genero == 'F'){
        if (idade_calculada < 18){
            img.src = "Feminino/menina.jpg";
            msg.innerHTML = `Detectamos uma menina com ${idade_calculada} anos.`;
        } else if ( idade_calculada > 18 && idade_calculada < 60){
            img.src = "Feminino/mulher.jpg";
            msg.innerHTML = `Detectamos uma mulher com ${idade_calculada} anos.`;
        } else {
            img.src = "Feminino/idosa.jpg";
            msg.innerHTML = `Detectamos uma idosa com ${idade_calculada} anos.`
        }

    }
}