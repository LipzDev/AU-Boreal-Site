function menuMobile() {
    let icon = document.querySelector('.icon');
    let menu = document.querySelector('.menu');

    function menuOpen() {
        icon.classList.toggle('icon-x');
        menu.classList.toggle('ativo');
    }

    icon.addEventListener('click', menuOpen);
}

menuMobile();

// BARRA DO HEADER

function headerModular() {
    let header = document.querySelector('.header');

    function headerMovel(){
        if(window.scrollY > 0){
            header.classList.add('modular');
        } else {
            header.classList.remove('modular');
        }
    }

    window.addEventListener('scroll', headerMovel);
}

headerModular();

// MODAL VIDEO

function modalIframe(){
    let imagemVideo = document.querySelector('.bg-item img');
    let modalVideo = document.querySelector('.modal-video')

    function openModal() {
        modalVideo.classList.toggle('video-ativo')        
    }
    imagemVideo.addEventListener('click', openModal);

    // FECHA O MODAL
    let fecharVideo = document.querySelector('.modal-video');

    function closeModal(){
        fecharVideo.classList.remove('video-ativo');
    }


    fecharVideo.addEventListener('click', closeModal);
}

modalIframe();


// MAQUINA DE ESCREVER

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i);
    });
}


const titulo = document.querySelector('.parallax h4');
typeWrite(titulo);

