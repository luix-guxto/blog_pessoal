let timeOutOfAlertImage = false;

function thisImageIs (boolean){
    if(timeOutOfAlertImage) return;
    timeOutOfAlertImage=true;
    setTimeout(function(){
        timeOutOfAlertImage=false;
    }, 10);
    if(boolean){
        alert("Essa é a imagem de perfil do meu Github");
    }else{
        alert("Essa é a imagem de fundo do meu Linkedin");
    }
}