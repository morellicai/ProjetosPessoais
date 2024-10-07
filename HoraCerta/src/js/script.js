function horaDoDia(){
    let msg = document.getElementById('text');
    let img = document.getElementById('img');
    let nomePessoa = window.prompt("Qual é o seu nome?");
    let data = new Date();
    let hora = data.getHours();
    if(hora >= 0 && hora < 4){
        msg.innerHTML = `Ola, ${nomePessoa}. Agora são ${hora} Horas. Você não devia estar dormindo?`
        img.src = "src/img/madrugada.jpg";
        document.body.style.backgroundColor = "rgb(54, 81, 141)";
        document.body.header.style.color = "rgb(255, 255, 255)";
    } else if(hora >= 4 && hora < 12){
        msg.innerHTML = `Bom dia, ${nomePessoa}. Agora são ${hora} horas`;
        img.src = "src/img/manha.jpg";
        document.body.style.backgroundColor = "rgb(130, 151, 147)";
    } else if(hora >= 12 && hora < 16) {
        msg.innerHTML = `Boa tarde, ${nomePessoa}. Agora são ${hora}`;
        img.src = "src/img/tarde.jpg";
        document.body.style.backgroundColor = "rgb(184, 157, 116)";
    } else if(hora >= 16 && hora < 19){
        msg.innerHTML = `Boa tarde, ${nomePessoa}. Agora são ${hora}`;
        img.src = "src/img/finalDeTarde.jpg";
        document.body.style.backgroundColor = "rgb(249, 175, 71)";
    } else {
        msg.innerHTML = `Boa noite ${nomePessoa}. Agora são ${hora} horas`;
        img.src = "src/img/noite.jpg";
        document.body.style.backgroundColor = "rgb(5, 34, 47)";
    }
}