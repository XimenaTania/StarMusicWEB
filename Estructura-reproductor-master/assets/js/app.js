const contenedorListaMusic = document.getElementById("lista-music");
const controles = document.getElementById("controles");
const menuMusic = document.getElementById("menuMusic");
const titlePlaylist = document.getElementById("titlePlaylist");
const playDescription = document.getElementById("playDescription");
const imgAlbum = document.getElementById("imgAlbum");
const album = document.getElementById("album");
const btnReaccion = document.getElementById("reaccion");

//eventos
btnReaccion.addEventListener("click", likear);
menuMusic.addEventListener("click", cargarinfo);
contenedorListaMusic.addEventListener("click", reproducirMusica);
controles.addEventListener("click", controlar);
//funcion
let estado = 0;

function likear() {
    if (estado == 0) {
        btnReaccion.classList.add("reaccion-activa");
        estado = 1;
    } else if (estado === 1) {
        btnReaccion.classList.remove("reaccion-activa");
        estado = 0;
    }
}

function cargarinfo(e) {
    let jsonurl = "";
    let titlePlay = "";
    let descripcionPlay = "";
    let srcImg = "";

    if (e.target.classList.contains("playEstudiar")) {
        jsonurl = "assets/musicJSON/estudiando.json";
        titlePlay = "Play List para estudiar ";
        descripcionPlay = "la mejor lista para estudiar ";
        srcImg = "assets/img/estudiar2.jpg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/estudiar2.jpg)";
    } else if (e.target.classList.contains("playRock")) {
        jsonurl = [{
                "id": 1,
                "playlist": "rock",
                "artista": "Atajo",
                "nombre": "Hoja Verde",
                "url": "assets/music/rock Nacional/Atajo-Hoja verde.mp3",
                "duracion": 209
            },
            {
                "id": 2,
                "playlist": "rock",
                "artista": "Alcoholika",
                "nombre": "Celia",
                "url": "assets/music/rock Nacional/Alcoholika-Celia.mp3",
                "duracion": 344
            },
            {
                "id": 3,
                "playlist": "rock",
                "artista": "Alcoholika",
                "nombre": "Celia II",
                "url": "assets/music/rock Nacional/Alcoholika La Christo-Celia.mp3",
                "duracion": 198
            },
            {
                "id": 4,
                "playlist": "rock",
                "artista": "Alcoholika & Lusmila Carpio",
                "nombre": "WarmiKuna",
                "url": "assets/music/rock Nacional/ALCOHOLIKA LA CHRISTO Warmikuna.mp3",
                "duracion": 200
            },
            {
                "id": 5,
                "playlist": "rock",
                "artista": "4 Non Blondes",
                "nombre": "What`s Up",
                "url": "assets/music/rock/5-Whats-up.mp3",
                "duracion": 298
            },

            {
                "id": 6,
                "playlist": "rock",
                "artista": "AC/DC",
                "nombre": "Back In Black",
                "url": "assets/music/rock/6-Back-In-Black.mp3",
                "duracion": 254
            },
            {
                "id": 7,
                "playlist": "rock",
                "artista": "Bon Jovi",
                "nombre": "It`s My Life",
                "url": "assets/music/rock/7-its-my-life.mp3",
                "duracion": 267
            },
            {
                "id": 8,
                "playlist": "rock",
                "artista": "Bon Jovi",
                "nombre": "Always",
                "url": "assets/music/rock/8-Always.mp3",
                "duracion": 362
            },
            {
                "id": 9,
                "playlist": "rock",
                "artista": "Guns And Roses",
                "nombre": "November Rain",
                "url": "assets/music/rock/9-november-rain.mp3",
                "duracion": 547
            },
            {
                "id": 10,
                "playlist": "rock",
                "artista": "Aerosmith",
                "nombre": "Crazy",
                "url": "https://open.spotify.com/track/6CIDsqMEEsBJf5Cv6RbuGw?si=DH3-lh-uRg6h5Sl3GMjDAQ",
                "duracion": 375
            },
            {
                "id": 11,
                "playlist": "rock",
                "artista": "Maroon 5",
                "nombre": "Memories",
                "url": "http://mus6.musicafm.club/mp3/3e28ac4f-5cf9-4343-b0ef-4f8d70caba8a.mp3",
                "duracion": 375
            },
            {
                "id": 12,
                "playlist": "rock",
                "artista": "The Outfield",
                "nombre": "Your Love",
                "url": "http://mus3.musicafm.club/mp3/e99df7dd-7dd6-459e-812f-4755739bd299.mp3",
                "duracion": 216
            },
            {
                "id": 13,
                "playlist": "rock",
                "artista": "AC/DC",
                "nombre": "highway to hell",
                "url": "http://mus1.musicafm.club/mp3/7396d6e2-085f-450c-9560-51ee75ae3b48.mp3",
                "duracion": 252
            },
            {
                "id": 14,
                "playlist": "rock",
                "artista": "A ha",
                "nombre": "Take On Me !!!",
                "url": "assets/music/rock/14-take-on-me.mp3",
                "duracion": 252
            }
        ];
        titlePlay = "Play List para rockear ";
        descripcionPlay = "la mejor lista para rockear  ";
        srcImg = "assets/img/rock1.jpg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/rock1.jpg)";
    } else if (e.target.classList.contains("playDeporte")) {
        jsonurl = [{
                "id": 1,
                "playlist": "deporte",
                "artista": "Boy",
                "nombre": "Naughity boy lalala",
                "url": "assets/music/deporte/NAUGHTY BOY LALALA.mp3",
                "duracion": 215
            },
            {
                "id": 1,
                "playlist": "deporte",
                "artista": "ROKY",
                "nombre": "Entrenamiento de Rocky",
                "url": "assets/music/deporte/2-entrenamiento-rocki.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "deporte",
                "artista": "Boy",
                "nombre": "Naughity boy lalala",
                "url": "assets/music/deporte/NAUGHTY BOY LALALA.mp3",
                "duracion": 215
            },
            {
                "id": 1,
                "playlist": "deporte",
                "artista": "Boy",
                "nombre": "Naughity boy lalala",
                "url": "assets/music/deporte/NAUGHTY BOY LALALA.mp3",
                "duracion": 215
            }
        ];
        titlePlay = "Para la Dieta";
        descripcionPlay = "La mejor lista para deporte";
        srcImg = "assets/img/cardio.jpg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/deporte1 .jpg)";

        //nuevas columnas
    } else if (e.target.classList.contains("playCarnabalito")) {
        jsonurl = [{
                id: 1,
                playlist: "Carnabalito",
                artista: "Atajo",
                nombre: "Hoja verde de la coca",
                url: "assets/music/Carnabalito/Atajo-Hoja verde.mp3",
                duracion: 215,
            },
            {
                id: 1,
                playlist: "Carnabalito",
                artista: "Atajo",
                nombre: "Pulga Presidente",
                url: "assets/music/Carnabalito/ATAJO-Pulga Presidente.mp3",
                duracion: 158,
            },
            {
                id: 1,
                playlist: "Carnabalito",
                artista: "Tierra Alta",
                nombre: "Quiero",
                url: "assets/music/Carnabalito/Tierra Alta Quiero.mp3",
                duracion: 158,
            },
        ];
        titlePlay = "Playlist Viva Bolivia ";
        descripcionPlay = "Zapateadita ";
        srcImg = "assets/img/carnabalito.jpeg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/Carnavalito2.jpg)";
    } else if (e.target.classList.contains("playCristiana")) {
        jsonurl = [{
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Cala75",
                "nombre": "Presiosa es tu palabra",
                "url": "assets/music/Cristiana/Cala75.mp3",
                "duracion": 215
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Canto Nuevo",
                "nombre": "Te amo",
                "url": "assets/music/Cristiana/CANTO NUEVO BOLIVIA - TE AMO.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Canto nuevo",
                "nombre": "Dios Supremo",
                "url": "assets/music/Cristiana/CANTO NUEVO BOLIVIA - DIOS SUPREMO.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Por Gracia",
                "nombre": "Corona de Oro",
                "url": "assets/music/Cristiana/Por Gracia CORONA DE ORO.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Por Gracia",
                "nombre": "Para que me diste vida",
                "url": "assets/music/Cristiana/Por Gracia Para que me diste Vida.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Por Gracia",
                "nombre": "Te alabare",
                "url": "assets/music/Cristiana/Por Gracia Popurry Te Alabare Jesus.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Por Gracia",
                "nombre": "Popurry",
                "url": "assets/music/Cristiana/Por Gracia REMIX.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "Cristiana",
                "artista": "Himno",
                "nombre": "Por que el vive",
                "url": "assets/music/Cristiana/porq el vive.mp3",
                "duracion": 158
            }
        ];
        titlePlay = "Adoremos Bolivia";
        descripcionPlay = "En Rojo Amarillo y Verde ";
        srcImg = "assets/img/cristiana.jpg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/cristi.jpg)";
    } else if (e.target.classList.contains("playCumbia")) {
        jsonurl = [{
                "id": 1,
                "playlist": "cumbia",
                "artista": "Histeria",
                "nombre": "Ya vives en mi",
                "url": "assets/music/cumbia/HISTERIA YA NO VIVES EN MI.mp3 ",
                "duracion": 215
            },
            {
                "id": 1,
                "playlist": "cumbia",
                "artista": "Sabor Sabor",
                "nombre": "Quien no lloro por amor",
                "url": "assets/music/cumbia/Quien no lloro por amor Grupo Sabor Sabor.mp3",
                "duracion": 158
            },
            {
                "id": 1,
                "playlist": "cumbia",
                "artista": "Soledad",
                "nombre": "Lejos de Ti",
                "url": "assets/music/cumbia/Soledad-Lejos de Ti.mp3",
                "duracion": 158
            }
        ];
        titlePlay = "Play List para tus fiestas ";
        descripcionPlay = "La mejor lista Hecho en Bolivia";
        srcImg = "assets/img/cumbia2.jpg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/cumbia.jpg)";
    } else if (e.target.classList.contains("playtodo")) {
        jsonurl = [{
            "id": 1,
            "playlist": "Carnabalito",
            "artista": "Atajo",
            "nombre": "Hoja verde de la coca",
            "url": "assets/music/Carnabalito/Atajo-Hoja verde.mp3",
            "duracion": 215
        },
        {
            "id": 1,
            "playlist": "Carnabalito",
            "artista": "Atajo",
            "nombre": "Pulga Presidente",
            "url": "assets/music/Carnabalito/ATAJO-Pulga Presidente.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Carnabalito",
            "artista": "Tierra Alta",
            "nombre": "Quiero",
            "url": "assets/music/Carnabalito/Tierra Alta Quiero.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Cala75",
            "nombre": "Presiosa es tu palabra",
            "url": "assets/music/Cristiana/Cala75.mp3",
            "duracion": 215
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Canto Nuevo",
            "nombre": "Te amo",
            "url": "assets/music/Cristiana/CANTO NUEVO BOLIVIA - TE AMO.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Canto nuevo",
            "nombre": "Dios Supremo",
            "url": "assets/music/Cristiana/CANTO NUEVO BOLIVIA - DIOS SUPREMO.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Por Gracia",
            "nombre": "Corona de Oro",
            "url": "assets/music/Cristiana/Por Gracia CORONA DE ORO.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Por Gracia",
            "nombre": "Para que me diste vida",
            "url": "assets/music/Cristiana/Por Gracia Para que me diste Vida.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Por Gracia",
            "nombre": "Te alabare",
            "url": "assets/music/Cristiana/Por Gracia Popurry Te Alabare Jesus.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Por Gracia",
            "nombre": "Popurry",
            "url": "assets/music/Cristiana/Por Gracia REMIX.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "Cristiana",
            "artista": "Himno",
            "nombre": "Por que el vive",
            "url": "assets/music/Cristiana/porq el vive.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "cumbia",
            "artista": "Histeria",
            "nombre": "Ya vives en mi",
            "url": "assets/music/cumbia/HISTERIA YA NO VIVES EN MI.mp3 ",
            "duracion": 215
        },
        {
            "id": 1,
            "playlist": "cumbia",
            "artista": "Sabor Sabor",
            "nombre": "Quien no lloro por amor",
            "url": "assets/music/cumbia/Quien no lloro por amor Grupo Sabor Sabor.mp3",
            "duracion": 158
        },
        {
            "id": 1,
            "playlist": "cumbia",
            "artista": "Soledad",
            "nombre": "Lejos de Ti",
            "url": "assets/music/cumbia/Soledad-Lejos de Ti.mp3",
            "duracion": 158
        }
    ];
        titlePlay = "Todas las canciones juntas ";
        descripcionPlay = "Disfruta ";
        srcImg = "assets/img/bachata.jpg";
        album.style.background =
            "linear-gradient(to right, rgba(2,2,2,0.726)15%,rgba(8,8,8,0.829)), url(assets/img/bachata.jpg)";
    }
    titlePlaylist.innerHTML = titlePlay;
    playDescription.innerHTML = descripcionPlay;
    imgAlbum.src = srcImg;
    cargarMusica(jsonurl);
}

function cargarMusica(data) {
    let html = "";
    data.forEach((music) => {
        html += `
                <li class="music">
                <input type="text" value="${music.url}" style="display: none; ">
                <a href="#" id="${music.id}" class="btn play-music"><i class="far fa-play-circle"></i></a>
                <h3>${music.artista}</h3>
                <h3 class="name" id="name">${music.nombre}</h3>
                <h3 class="time">--</h3>
            </li>
                `;

        contenedorListaMusic.innerHTML = html;
    });
}

function reproducirMusica(e) {
    console.log("play");
    if (e.target.parentElement.classList.contains("play-music")) {
        let urlM = e.target.parentElement.previousElementSibling.value;
        console.log(urlM);
        controles.innerHTML = `<a href="#" class="btn control atras">
        <i class="fas fa-backward"></i></a>
        <audio src="${urlM}" style="width: 50vw;" controls autoplay><input type="text" value="${urlM}"
         style="display: none;"></audio>
        <a href="#" class="btn control siguiente"><i class="fas fa-forward"></i></a>`;

        e.target.parentElement.classList.add("reaccion-activa-reproducida");
        siguienteAutomatico();
    }
}

function controlar(e) {
    let audio = e.target.parentElement.parentElement.children[1].children[0];
    let audioUrl = audio.value;
    // console.log(audioUrl);
    console.log(contenedorListaMusic.children);
    let musicArray = Array.from(contenedorListaMusic.children);
    if (e.target.parentElement.classList.contains("siguiente")) {
        musicArray.forEach((limusic) => {
            if (limusic.children[0].value === audioUrl) {
                let siguienteMusica = limusic.nextElementSibling.children[0].value;
                let elementoParaReproducido = limusic.nextElementSibling.children[1];

                siguienteAtras(siguienteMusica, elementoParaReproducido);
            }
        });
    }
    if (e.target.parentElement.classList.contains("atras")) {
        musicArray.forEach((limusic) => {
            if (limusic.children[0].value === audioUrl) {
                let musicaAtras = limusic.previousElementSibling.children[0].value;
                let elementoParaReproducido =
                    limusic.previousElementSibling.children[1];
                siguienteAtras(musicaAtras, elementoParaReproducido);
            }
        });
    }
}

function siguienteAtras(musica, reproducida) {
    controles.innerHTML = `<a href="#" class="btn control atras">
    <i class="fas fa-backward"></i></a>
    <audio src="${musica}" style="width: 50vw;" controls autoplay><input type="text" value="${musica}"
     style="display: none;"></audio>
    <a href="#" class="btn control siguiente"><i class="fas fa-forward"></i></a>`;
    reproducida.classList.add("reaccion-activa-reproducida");

    siguienteAutomatico();
}

function siguienteAutomatico() {
    let audioEtiqueta = controles.children[1];
    audioEtiqueta.addEventListener("eneded", () => {
        let audioUrl = audioEtiqueta.children[0].value;
        let musicArray = Array.from(contenedorListaMusic.children);
        musicArray.forEach((limusic) => {
            if (limusic.children[0].value === audioUrl) {
                let siguienteMusica = limusic.nextElementSibling.children[0].value;
                let elementoParaReproducido = limusic.nextElementSibling.children[1];

                siguienteAtras(siguienteMusica, elementoParaReproducido);
            }
        });
    });
}