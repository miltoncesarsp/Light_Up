const btn = document.getElementsByClassName('btn')
const botao = [0,0,0,0,0,0,0,0,0]
const solucao = [0,0,0,0,0,0,0,0,0]
const confirma = document.getElementById('confirma')
const comojogar = document.getElementById('comojogar')
const verificador = [false,false,false,false,false,false,false,false,false]
const luzes = document.getElementsByClassName('luzes')
const luzes2 = document.getElementsByClassName('luzes2')
var contador = 1
const tentativa = document.getElementById('tentativa')

randomize()

// Checagem do botão clicado
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', contagem, false)
}

confirma.addEventListener('click',verifica)

comojogar.addEventListener('click',instrucao)

//Informação de como jogar
function instrucao(){
    swal("Como Jogar","A cada ínicio de jogo um número aleatório é gerado para cada botão, sua missão é descobrir esses números. Cada vez que você aperta o botão 'CONFIRMA' o sistema faz uma verificação para verificar se os números estão corretos. Para ajudar toda vez que existe um botão certo uma luz é ligada horizontalmente e verticalmente. ATENÇÃO: a luz indica que tem um botão correto na linha ou coluna, mas não diz exatamente qual botão." ,"info")
}

//Aumenta valor dos botões
function contagem() {
    if (this.innerHTML<9){
        this.innerHTML++
    }else{
        this.innerHTML=0
    }
    botao[this.id] = parseInt(this.innerHTML)
}

// Atribui valor aleatório para solução
function randomize(){
    for (i = 0; i<9; i++){
    solucao[i] = Math.floor(Math.random() * 10)
    }
    console.log(solucao)
}

// Ações do Botão CONFIRMA
function verifica(){
    contador++
    for(i = 0;i<solucao.length;i++){
        if(botao[i] == solucao[i]){
                verificador[i] = true
        }else{
                verificador[i] = false
        }
    }
    verificaLuzes()
    resultado()
    tentativa.innerHTML = contador+"/10"
    console.log(tentativa.innerHTML)
}

//Verificação de resposta para acender luzes
function verificaLuzes(){

//Horizontal
    if (verificador[0] == true && verificador[1] == true && verificador[2] == true){
        luzes[0].src = "./img/ligado.png"
        luzes[1].src = "./img/ligado.png"
        luzes[2].src = "./img/ligado.png"
     }else{
         if((verificador[0] == true && verificador[1] == true) || (verificador[0] == true && verificador[2] == true) || (verificador[1] == true && verificador[2] == true)){
            luzes[0].src = "./img/ligado.png"
            luzes[1].src = "./img/ligado.png"
            luzes[2].src = "./img/desligado.png"
         }else{
            if(verificador[0] == true || verificador[1] == true || verificador[2] == true){
            luzes[0].src = "./img/ligado.png"
            luzes[1].src = "./img/desligado.png"
            luzes[2].src = "./img/desligado.png"
            }else{
            luzes[0].src = "./img/desligado.png"
            luzes[1].src = "./img/desligado.png"
            luzes[2].src = "./img/desligado.png"
            }
         }
     }
     if (verificador[3] == true && verificador[4] == true && verificador[5] == true){
        luzes[3].src = "./img/ligado.png"
        luzes[4].src = "./img/ligado.png"
        luzes[5].src = "./img/ligado.png"
     }else{
         if((verificador[3] == true && verificador[4] == true) || (verificador[3] == true && verificador[5] == true) || (verificador[4] == true && verificador[5] == true)){
            luzes[3].src = "./img/ligado.png"
            luzes[4].src = "./img/ligado.png"
            luzes[5].src = "./img/desligado.png"
         }else{
            if(verificador[3] == true || verificador[4] == true || verificador[5] == true){
            luzes[3].src = "./img/ligado.png"
            luzes[4].src = "./img/desligado.png"
            luzes[5].src = "./img/desligado.png"
            }else{
            luzes[3].src = "./img/desligado.png"
            luzes[4].src = "./img/desligado.png"
            luzes[5].src = "./img/desligado.png"
            }
         }
     }
     if (verificador[6] == true && verificador[7] == true && verificador[8] == true){
        luzes[6].src = "./img/ligado.png"
        luzes[7].src = "./img/ligado.png"
        luzes[8].src = "./img/ligado.png"
     }else{
         if((verificador[6] == true && verificador[7] == true) || (verificador[6] == true && verificador[8] == true) || (verificador[7] == true && verificador[8] == true)){
            luzes[6].src = "./img/ligado.png"
            luzes[7].src = "./img/ligado.png"
            luzes[8].src = "./img/desligado.png"
         }else{
            if(verificador[6] == true || verificador[7] == true || verificador[8] == true){
            luzes[6].src = "./img/ligado.png"
            luzes[7].src = "./img/desligado.png"
            luzes[8].src = "./img/desligado.png"
            }else{
            luzes[6].src = "./img/desligado.png"
            luzes[7].src = "./img/desligado.png"
            luzes[8].src = "./img/desligado.png"
            }
         }
     }

//Vertical
    if (verificador[0] == true && verificador[3] == true && verificador[6] == true){
        luzes2[0].src = "./img/ligado.png"
        luzes2[3].src = "./img/ligado.png"
        luzes2[6].src = "./img/ligado.png"
    }else{
        if((verificador[0] == true && verificador[3] == true) || (verificador[0] == true && verificador[6] == true) || (verificador[3] == true && verificador[6] == true)){
            luzes2[0].src = "./img/ligado.png"
            luzes2[3].src = "./img/ligado.png"
            luzes2[6].src = "./img/desligado.png"
        }else{
            if(verificador[0] == true || verificador[3] == true || verificador[6] == true){
            luzes2[0].src = "./img/ligado.png"
            luzes2[3].src = "./img/desligado.png"
            luzes2[6].src = "./img/desligado.png"
            }else{
            luzes2[0].src = "./img/desligado.png"
            luzes2[3].src = "./img/desligado.png"
            luzes2[6].src = "./img/desligado.png"
            }
        }
    }
    if (verificador[1] == true && verificador[4] == true && verificador[7] == true){
        luzes2[1].src = "./img/ligado.png"
        luzes2[4].src = "./img/ligado.png"
        luzes2[7].src = "./img/ligado.png"
    }else{
        if((verificador[1] == true && verificador[4] == true) || (verificador[1] == true && verificador[7] == true) || (verificador[4] == true && verificador[7] == true)){
            luzes2[1].src = "./img/ligado.png"
            luzes2[4].src = "./img/ligado.png"
            luzes2[7].src = "./img/desligado.png"
        }else{
            if(verificador[1] == true || verificador[4] == true || verificador[7] == true){
            luzes2[1].src = "./img/ligado.png"
            luzes2[4].src = "./img/desligado.png"
            luzes2[7].src = "./img/desligado.png"
            }else{
            luzes2[1].src = "./img/desligado.png"
            luzes2[4].src = "./img/desligado.png"
            luzes2[7].src = "./img/desligado.png"
            }
        }
    }
    if (verificador[2] == true && verificador[5] == true && verificador[8] == true){
        luzes2[2].src = "./img/ligado.png"
        luzes2[5].src = "./img/ligado.png"
        luzes2[8].src = "./img/ligado.png"
    }else{
        if((verificador[2] == true && verificador[5] == true) || (verificador[2] == true && verificador[8] == true) || (verificador[5] == true && verificador[8] == true)){
            luzes2[2].src = "./img/ligado.png"
            luzes2[5].src = "./img/ligado.png"
            luzes2[8].src = "./img/desligado.png"
        }else{
            if(verificador[2] == true || verificador[5] == true || verificador[8] == true){
            luzes2[2].src = "./img/ligado.png"
            luzes2[5].src = "./img/desligado.png"
            luzes2[8].src = "./img/desligado.png"
            }else{
            luzes2[2].src = "./img/desligado.png"
            luzes2[5].src = "./img/desligado.png"
            luzes2[8].src = "./img/desligado.png"
            }
        }
    }
}

// Retorna resultado final do Jogo
function resultado(){
    if (verificador[0] == true && verificador[1] == true && verificador[2] == true && verificador[3] == true && verificador[4] == true && verificador[5] == true && verificador[6] == true && verificador[7] == true && verificador[8] == true){
        contador = 1
        swal("Parabéns!","Você ligou todas as luzes","success")
        randomize()
        reinicio()
    }else{
        if(contador > 10){
            contador = 1
            swal("Que pena!","Ainda existem luzes desligadas, tente novamente","error")
            randomize()
            reinicio()
           for(i=0;i<btn.length;i++){
            btn[i].innerHTML = 0
           }
        }  
    }
}

//Reinicia luzes e botões
function reinicio(){
    for(i=0;i<btn.length;i++){
        btn[i].innerHTML = 0
        luzes[i].src = "./img/desligado.png"
        luzes2[i].src = "./img/desligado.png"
       }
}