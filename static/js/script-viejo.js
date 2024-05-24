window.onload = function() {
    // Carrousel
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

    // Eventos de click para los botones
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

    //Categorias

    class Categoria {
        constructor(nombre, colorFondo, srcImagen, descripcion, imgDescripcion, clave) {
            this.nombre = nombre;
            this.colorFondo = colorFondo;
            this.srcImagen = srcImagen;
            this.descripcion = descripcion;
            this.imgDescripcion = imgDescripcion;
            this.clave = clave;
        }

        generar_Card_HTML_index() {
            const card = document.createElement('a');
            card.href = `templates/categoria.html?clave=${this.clave}`;
            card.className = 'card-categoria';
            card.style.backgroundColor = this.colorFondo;

            card.innerHTML = `
                <p class="nombre-categorias">${this.nombre}</p>
                <div class="categoria-fondo">
                    <img class="imagen-categorias" src="${this.srcImagen}" alt="${this.nombre}">
                </div>
            `;

            return card;
        }
    }

    const categorias = {
        'comida-tradicional-china': {
            nombre: 'Comida Tradicional China',
            colorFondo: '#FF3434',
            srcImagen: 'static/img/Tradicional-china-sinbg.png',
            descripcion: 'Disfruta de los auténticos sabores de la cocina tradicional china, como dumplings, Peking duck, y chow mein. Nuestra selección de platos está hecha con recetas tradicionales para brindarte una experiencia culinaria única.',
            imgDescripcion: ''
        },
        'hamburguesas': {
            nombre: 'Hamburguesas',
            colorFondo: '#FFD700',
            srcImagen: 'static/img/hamburgesa-sinbg.png',
            descripcion: 'Nuestras hamburguesas combinan lo mejor de ambos mundos, fusionando sabores orientales con ingredientes frescos y locales. Prueba nuestra hamburguesa de cerdo a la barbacoa con un toque especial.',
            imgDescripcion: ''
        },
        'tradicional-argentina': {
            nombre: 'Tradicional Argentina',
            colorFondo: '#0084ff',
            srcImagen: 'static/img/Tradicional-argentina-sinbg.png',
            descripcion: 'Deléitate con lo mejor de la gastronomía argentina, incluyendo empanadas, asado, y locro. Cada bocado te llevará a un viaje por los sabores ricos y variados de la cocina argentina.',
            imgDescripcion: ''
        },
        'bebidas': {
            nombre: 'Bebidas',
            colorFondo: '#ff7300',
            srcImagen: 'static/img/Bebidas-sinbg.png',
            descripcion: 'Explora nuestra variedad de bebidas, desde el clásico té de jazmín chino hasta el tradicional mate argentino. Perfecto para acompañar tus comidas o disfrutar en cualquier momento del día.',
            imgDescripcion: ''
        },
        'pollo-pescado': {
            nombre: 'Pollo y Pescado',
            colorFondo: '#a8dadc',
            srcImagen: 'static/img/Pollo-pescado-sinbg.png',
            descripcion: 'Descubre nuestras opciones de pollo y pescado, preparados con técnicas auténticas y sabores exquisitos. Prueba el pollo Kung Pao y el pescado al vapor con jengibre para una experiencia deliciosa y saludable.',
            imgDescripcion: ''
        },
        'ensaladas-verduras': {
            nombre: 'Ensaladas y Verduras',
            colorFondo: '#65FF3F',
            srcImagen: 'static/img/Ensalada-sinbg.png',
            descripcion: 'Refresca tu paladar con nuestras ensaladas y platos de verduras, como la ensalada de algas y el bok choy salteado. Perfecto para aquellos que buscan opciones más ligeras pero llenas de sabor.',
            imgDescripcion: ''
        },
        'postres': {
            nombre: 'Postres',
            colorFondo: '#AC23FF',
            srcImagen: 'static/img/Postres-sinbg.png',
            descripcion: 'Termina tu comida con un toque dulce con nuestros postres, como el tradicional pastel de luna, flan casero, y helado artesanal. La manera perfecta de cerrar tu experiencia gastronómica.',
            imgDescripcion: ''
        },
        'desayunos': {
            nombre: 'Desayuno',
            colorFondo: '#FC44CA',
            srcImagen: 'static/img/Desayuno-sinbg.png',
            descripcion: 'El desayuno es la comida más importante del día, y nuestra selección de desayunos te asegura comenzar la mañana con energía y satisfacción. Desde clásicos tradicionales hasta opciones más innovadoras, ofrecemos una variedad de platos que se adaptan a todos los gustos. Ya sea que prefieras un desayuno ligero o uno más sustancioso, encontrarás algo que te encantará.',
            imgDescripcion: ''
        }
    };

    function agregarTarjetas(categorias) {
        const container = document.getElementById('contenedor-card-categoria');

        for (const clave in categorias) {
            const { nombre, colorFondo, srcImagen } = categorias[clave];
            const categoria = new Categoria(nombre, colorFondo, srcImagen, clave);
            container.appendChild(categoria.generar_Card_HTML_index());
            console.log(categoria)
        }
    }

    // Iniciar
    renderizarImagenInicio();
    agregarTarjetas(categorias);
};