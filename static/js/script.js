window.onload = function() {
    const IMAGENES = [
        'static/img/categoria1.jpg',
        'static/img/categoria2.jpg',
        'static/img/categoria3.jpg',
        'static/img/categoria4.jpg'
    ];
    const DESCRIPCION = [
        'BAOZI nuestra especialidad de la casa',
        'Los clasicos no se olvidan, prueba nuestros alimentos mas consumidos',
        'La tradicion siempre presente, las milanesas mas deliciosas del Pais',
        'Salteado Wok, la herramienta para las comidas mas saludables'
    ];

    // Variables utilizadas
    let posicionActual = 0;
    const $botonRetroceder = document.querySelector('#retroceder');
    const $botonAvanzar = document.querySelector('#avanzar');
    const $imagen = document.querySelector('#imagen');
    const $textoImagen = document.querySelector('.texto-imagen');

    // Funcion que cambia la foto en la siguiente posicion
    function pasarFoto() {
        posicionActual = (posicionActual + 1) % IMAGENES.length;
        renderizarImagen();
    }

    // Funcion que cambia la foto en la anterior posicion
    function retrocederFoto() {
        posicionActual = (posicionActual - 1 + IMAGENES.length) % IMAGENES.length;
        renderizarImagen();
    }

    // Funcion que actualiza la imagen con efecto fade
    function renderizarImagen() {
        $imagen.classList.remove('fade-in');
        $imagen.classList.add('fade-out');
        setTimeout(() => {
            $imagen.setAttribute("src", IMAGENES[posicionActual]);
            $textoImagen.innerHTML = DESCRIPCION[posicionActual];
            $imagen.classList.remove('fade-out');
            $imagen.classList.add('fade-in');
        }, 400);
    }

    // Funcion que actualiza la imagen INICIAL
    function renderizarImagenInicio() {
        $imagen.classList.add('fade-in');
        $imagen.setAttribute("src", IMAGENES[posicionActual]);
        $textoImagen.innerHTML = DESCRIPCION[posicionActual];
    }

    // Auto-play
    let autoPlayIntervalo = setInterval(pasarFoto, 3000);

    // Eventos
    $botonAvanzar.addEventListener('click', () => {
        pasarFoto();
        clearInterval(autoPlayIntervalo); // Detener el auto-play
        autoPlayIntervalo = setInterval(pasarFoto, 3000);
    });
    
    $botonRetroceder.addEventListener('click', () => {
        retrocederFoto();
        clearInterval(autoPlayIntervalo); // Detener el auto-play
        autoPlayIntervalo = setInterval(pasarFoto, 3000);
    });

    // Iniciar
    renderizarImagenInicio();
};
