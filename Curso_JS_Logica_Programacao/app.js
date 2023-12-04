let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }
function textoMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');	
}

textoMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'O numero é maior que o valor secreto');
             
        } else {
            exibirTextoNaTela('h1', 'O numero é menor que o valor secreto'); 
        }tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeroEscolhido = listaDeNumeros.length;

    if(quantidadeDeNumeroEscolhido == 3){
         listaDeNumeros = [];
    }
            if(listaDeNumeros.includes(numeroEscolhido)){ 
                return gerarNumeroAleatorio(); 
            }else {
                listaDeNumeros.push(numeroEscolhido);
                console.log(listaDeNumeros);
                return numeroEscolhido;
            }
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = ''; 
}

function reiniciarJogo(){
    numeroSecreto = 4;
    tentativas = 1;
    limparCampo();
    textoMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}