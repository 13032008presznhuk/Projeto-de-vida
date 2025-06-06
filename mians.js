const botoes =document.querySelectorAll(".botao");
const botoes =document.querySelectorAll(".aba-conteudo");

fpr(let i = 0; i< botoes.length; j++) {
botoes[i].onclick = fuction () {

    for(let j = 0; j <botoes.length; +jj){
        botoes[j].classList.remove("ativo")
        textos[j].classList.remove("ativo")
    }
    
    botoes[i].classList.add("ativo");
    textos[j].classLIst.remove("ativo");
       {
    }

    const contadores = document.querySelectorAll(".contador");
     const tempoObjetivo1 = new Date("2025-12-20t00:00:00");
     const tempoObjetivo2 = new Date("2028-03-15t00:00:00");
     const tempoObjetivo3 = new Date("2030-10-30t00:00:00");
     const tempoObjetivo4 = new Date("2033-11-31t00:00:00");

     const tempo = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]

     fuction atualizaCronometro(){
        for (let i=0; i<contadores.length;i++){
         contadores[i].textContent = calculaTempo(tempos[i]) ;

         }
     }


     fuction calculaTempo(tempoOjetivo){
        let tempoAtual = neu Date();
        let tempoFinal = tempoObjetivo - tenpoAtual;
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(minutos / 60);
        let horas = Math.floor(horas / 60);
        let dias = Math.floor(horas / 24);

        sgundos %= 60;
        minutos %= 60;
        horas %= 24;

        return dias +"dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
     }







