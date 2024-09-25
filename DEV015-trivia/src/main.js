document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("buttonWelcome");

    // Verifica si el botón existe
    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe si está en un formulario

            let nombre_jugador = document.getElementById('nombre').value;
            
            // Verifica si el jugador ha ingresado un nombre
            if (nombre_jugador) {
                console.log("NOMBRE", nombre_jugador);
                nombre_jugador = nombre_jugador.toUpperCase();
                localStorage.setItem('nombreJugador', nombre_jugador);
                change(); // Llama a la función change
            } else {
                console.log("El nombre del jugador no ha sido ingresado");
            }
        });
    } else {
        console.log('El botón con ID "buttonWelcome" no fue encontrado');
    }

    // Función para cambiar de página
    function change() {
        window.location.href = 'escoger.html'; // Redirige a la página escoger.html
    }
});


function seleccionarNivel(nivel) {
    if (nivel === 'facil') {
        window.location.href = 'welcome.html';
    } else if (nivel === 'dificil') {
        window.location.href = 'pesadilla.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const cuentaAtrasElement = document.getElementById('cuenta-atras');
    if (cuentaAtrasElement) {
        iniciarTemporizador();
    }
});
/** Aqui va el JS de cronometro */
function iniciarTemporizador() {
    let tiempoRestante = 5 * 60;

    function actualizarCuentaAtras() {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;

        const displayMinutos = minutos < 10 ? `0${minutos}` : minutos;
        const displaySegundos = segundos < 10 ? `0${segundos}` : segundos;

        const cuentaAtrasElement = document.getElementById('cuenta-atras');
        if (cuentaAtrasElement) {
            cuentaAtrasElement.innerText = `${displayMinutos}:${displaySegundos}`;
        } else {
            console.log('El elemento con ID "cuenta-atras" no fue encontrado');
        }

        if (tiempoRestante > 0) {
            tiempoRestante--;
        } else {
            clearInterval(intervalo); // Detener el temporizador cuando llegue a 0
            console.log('El tiempo se ha agotado');
        }
    }

    const intervalo = setInterval(actualizarCuentaAtras, 1000); // Ejecutar cada segundo
}

/**
 Aqui va el JS de facil
 */
function corregir_facil() {
    let aciertos = 0;

    if (document.querySelector('input[name="p1"]:checked')?.value === '1') {
        aciertos++;
    }

    if (document.querySelector('input[name="p2"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p3"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p4"]:checked')?.value === '3') {
        aciertos++;
    }

    if (document.querySelector('input[name="p5"]:checked')?.value === '1') {
        aciertos++;
    }

    document.getElementById('resultado').textContent = aciertos;


    if (aciertos === 5) {
        alert(`¡Felicitaciones por completar con éxito esta trivia! Te invito a probar el modo pesadilla ,¿Te Atreves?`);
        window.location.href = "pesadilla.html";
    } else {
        alert(`${nombre}, has acertado ${aciertos} de 5 preguntas. ¡Inténtalo de nuevo!`);
    }
}

/**
 Aqui va el JS de pesadilla
 */
function corregir_dificil() {
    let aciertos = 0;

    if (document.querySelector('input[name="p1"]:checked')?.value === '3') {
        aciertos++;
    }

    if (document.querySelector('input[name="p2"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p3"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p4"]:checked')?.value === '1') {
        aciertos++;
    }

    if (document.querySelector('input[name="p5"]:checked')?.value === '3') {
        aciertos++;
    }

    document.getElementById('resultado').textContent = aciertos;

    if (aciertos === 5) {
        let confirmacion = confirm('¡Felicitaciones por completar con éxito esta trivia! ¿Te gustaría volver a intentarlo?');
        if (confirmacion) {
            window.location.href = "escoger.html";
        } else {
            console.log("El usuario canceló.");
        }
    }
}    