
/* function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaNumPad = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9'];

listaNumPad.reverse(); // Inverte a ordem da lista

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        console.log(event.code);
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add("ativa");
            tocaSom(idAudio); // Toca o som correspondente ao pressionar a tecla
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

    window.addEventListener('keydown', function(event) {
        for (let i = 0; i < listaNumPad.length; i++) {
            if (event.code === listaNumPad[i]) {
                if (i === contador) { // Verifica se o índice atual é igual ao contador
                    tecla.classList.add('ativa');
                    tocaetorAudio);
Som(idAudio); // Toca o som correspondente ao pressionar a tecla
                }
            }
        }
    });
    
    window.addEventListener('keyup', function(event) {
        for (let i = 0; i < listaNumPad.length; i++) {
            if (event.code === listaNumPad[i]) {
                if (i === contador) { // Verifica se o índice atual é igual ao contador
                    tecla.classList.remove('ativa');
                }
            }
        }
    }
});
    
*/

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio); 
    

        if(elemento != null && elemento.localName === 'audio' ) {
            elemento.play();
            console.log(elemento);
        }else if(elemento === null){
            alert("ERROR: Elemento não encontrado! Favor, verificar o elemento informa no parâmetro da função.");
        }else {
            alert("ERROR: Código de tecla não reconhecido!");
        }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla')
const listaNumPad = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9'];

for(let indice = 0; indice <listaDeTeclas.length; indice++){

    const tecla = listaDeTeclas[indice];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`; // Template string

    tecla.onclick = function() {
        tocaSom(idAudio);
        console.log(idAudio);
    }

    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
    }

    tecla.onkeyup = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    }

        document.addEventListener('keydown', function(event){
            for(let i = 0; i < listaNumPad.length; i++){
                if(event.code === listaNumPad[i]){
                if(i === indice){
                    tecla.classList.add('ativa');
                    tocaSom(idAudio);
                         }
                    }
                }
        });

        document.addEventListener('keyup', function(event){
            for(let i = 0; i < listaNumPad.length; i++){
                if(event.code === listaNumPad[i]){
                   if(i === indice){
                    tecla.classList.remove('ativa');
                        }
                    }
                }
            });
        

        
    
 };