function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if(elemento && elemento.localName == 'audio') {
        elemento?.play();
    }
    else {
        console.log('Elemento invalido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const teclas = listaDeTeclas[contador];
    const instrumentos = teclas.classList[1];
    const idAudio = `#som_${instrumentos}`;

    teclas.onclick = () => {
        tocaSom(idAudio);
    }

    teclas.onkeydown = (evento) => {
        if(evento.code === "Enter" || evento.code === "Space"){
            teclas.classList.add('ativa');
        }
    }

    teclas.onkeyup = () => {
        teclas.classList.remove('ativa')
    }
}