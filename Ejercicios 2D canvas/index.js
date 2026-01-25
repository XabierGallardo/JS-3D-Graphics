canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext("2d");
const verdeMatrix = "#00ff41";
const fondoNegro = "#2c274b";

// Dibujamos el fondo
function limpiar() {
    ctx.fillStyle = fondoNegro;
    ctx.fillRect(0,0, canvas.width,canvas.height);
}

limpiar();


/*
// Practicando con canvas!
// Dibujamos cuadros
ctx.fillStyle = "#00ff41";
ctx.fillRect(50, 50, 30, 30);

// Dibujamos bordes
ctx.strokeStyle = "#00ff41"; // color del borde
ctx.lineWidth = 2; // ancho del borde
ctx.strokeRect(50, 50, 30, 30); // origen y ejes x e y
*/


/* =============================================================
    Ejercicio 1 — Dibuja una cuadrícula (base para coordenadas)
    =============================================================*/

/*
const anchoCuadricula = 50;
const altoCuadricula = 50;
const cantidad = (canvas.width / anchoCuadricula) * (canvas.height / altoCuadricula);

let origenX = 0;
let origenY = 0;

for(let i = 0; i < cantidad; i++) {

    ctx.strokeStyle = verdeMatrix;
    ctx.lineWidth = 2;
    ctx.strokeRect(origenX, origenY, anchoCuadricula, altoCuadricula);
    
    origenX += 50;
    if(origenX > 450) {
        origenX = 0;
        origenY += 50;
    }
}
*/
// limpiar();





/* =============================================================
    Ejercicio 1.2 -> Tablero ajedrez
============================================================= */

/*
const anchoCuadricula = 50;
const altoCuadricula = 50;
const cantidadTotal = (canvas.width / anchoCuadricula) * (canvas.height / altoCuadricula);
let cantidadY = 0;

let origenX = 0;
let origenY = 0;

for(let i = 0; i < cantidadTotal; i++) {

    // Los pares en el eje vertical arrancan con el verde
    if(cantidadY % 2 === 0) {
        
        if (i % 2 == 0) {
            ctx.fillStyle = verdeMatrix;
            ctx.fillRect(origenX, origenY, anchoCuadricula, altoCuadricula);
        } else {
            ctx.fillStyle = fondoNegro;
            ctx.fillRect(origenX, origenY, anchoCuadricula, altoCuadricula);
        }
        
    
    // Los impares en el eje vertical arrancan con el azul
    } else {
        if (i % 2 == 0) {
            ctx.fillStyle = fondoNegro;
            ctx.fillRect(origenX, origenY, anchoCuadricula, altoCuadricula);
        } else {
            ctx.fillStyle = verdeMatrix;
            ctx.fillRect(origenX, origenY, anchoCuadricula, altoCuadricula);
        }
    }
    
    origenX += 50;
        
    if(origenX > 450) {
        origenX = 0;
        origenY += 50;
        cantidadY += 1;
    }
}
*/
// limpiar();

/* =============================================================
    Ejercicio 2 — Dibuja un círculo donde haga clic el mouse
============================================================= */

// Dibujar circulo en el centro
/*
const centroX = canvas.width / 2;
const centroY = canvas.height / 2;
ctx.beginPath();
ctx.arc(centroX, centroY, 40, 0, Math.PI * 2);
ctx.lineWidth = 2; // ancho del borde 2px
ctx.strokeStyle = verdeMatrix; // color dle borde
ctx.stroke(); // Dibuja el contorno del segmento
*/

// Rellenar el circulo
// ctx.fillStyle = verdeMatrix;
// ctx.fill()

/*
canvas.addEventListener("click", (event) => {

// posicion del mouse en el navegador (no coincide con la del canvas)
//console.log(event.clientX); // 340 

/* let rect = canvas.getBoundingClientRect(); // devuelve un objeto
    {
        left:   posición x del borde izquierdo del canvas en pantalla,
        top:    posición y del borde superior,
        width:  ancho visible del canvas en pixeles CSS,
        height: alto visible del canvas,
        right:  left + width,
        bottom: top + height
    }*/
/*
// Obtener posicion del mouse al hacer click
let rect = canvas.getBoundingClientRect();
const scaleX = canvas.width / rect.width;
const scaleY = canvas.height / rect.height;

const xOrigin = (event.clientX - rect.left) * scaleX;
const yOrigin = (event.clientY - rect.top) * scaleY;

console.log(`Coordenadas x e y : ${xOrigin} ${yOrigin}`);

// Donde hagamos click dibujamos
ctx.beginPath();
ctx.arc(xOrigin, yOrigin, 40, 0, Math.PI * 2);
ctx.lineWidth = 2; // ancho del borde 2px
ctx.strokeStyle = verdeMatrix; // color dle borde
ctx.stroke(); // Dibuja el contorno del segmento

});
*/


/* =============================================================
    Ejercicio 3 — Movimiento lineal: pelota moviendose
============================================================= */

/*
let xPosition = 0;
let yPosition = 0;

// Primer cuadro
ctx.fillStyle = verdeMatrix;
ctx.fillRect(xPosition, yPosition, 30, 30);

setInterval(() => {
    // Borramos el tramo anterior
    ctx.fillStyle = fondoNegro;
    ctx.fillRect(xPosition, yPosition, 30, 30);
    

    xPosition++; // Aumentamos la posicion en el eje X
    yPosition++;

    if(xPosition > 500) {
        xPosition = 0;
    }

    if(yPosition > 500) {
        yPosition = 0;
    }
    
    // Dibujamos cuadros
    ctx.fillStyle = "#00ff41";
    ctx.fillRect(xPosition, yPosition, 30, 30);

}, 2);
*/



/* =============================================================
    Ejercicio 4 — Rebotando en los bordes, colision con paredes
============================================================= */

/* Solucion previa, no optima, utiliza setInterval
let xPosition = 0;
let ancho = 30;
let alto = 30;
let xBorder = false;
let yLimit = false;

// Los limites son 0 y 470 (500 - 30px del cuadrado)
let yPosition = Math.floor(Math.random() * 470) + 1; 

// Primer cuadro
ctx.fillStyle = verdeMatrix;
ctx.fillRect(xPosition, yPosition, ancho, alto);


setInterval(() => {
    function movement(direction) {
        // Borramos el tramo anterior
        ctx.fillStyle = fondoNegro;
        ctx.fillRect(xPosition, yPosition, ancho, alto);

        if (direction == "right") {
            xPosition++;
        } else {
            xPosition--;
        }
        console.log(xPosition);

        // Pintamos el nuevo tramo
        ctx.fillStyle = verdeMatrix;
        ctx.fillRect(xPosition, yPosition, ancho, alto);
    }

    // Si es > 0 y no toco el borde, va a la derecha
    if(xPosition >= 0 && !xBorder) {
        movement("right");
        if(xPosition == 470) {
            xBorder = !xBorder;
        }
    } 
    
    // Si es > 0 y ya toco borde, va a la izquierda
    if(xPosition >= 0 && xBorder) {
        //xBorder = !xBorder; // Indicamos que llego al limite
        movement("left");
        if(xPosition == 0) {
            xBorder = !xBorder;
        }
    }

}, 1);
*/

/*
// Optimizado, pasando de setInterval a requestAnimationFrame
let xPosition = 0;
let ancho = 30;
let alto = 30;
let xBorder = false;
let yLimit = false;

// Los limites son 0 y 470 (500 - 30px del cuadrado)
let yPosition = Math.floor(Math.random() * 470) + 1; 

// Primer cuadro
ctx.fillStyle = verdeMatrix;
ctx.fillRect(xPosition, yPosition, ancho, alto);


// Movimiento de la pieza
function movement(direction) {
    // Borramos el tramo anterior
    ctx.fillStyle = fondoNegro;
    ctx.fillRect(xPosition, yPosition, ancho, alto);

    // Definimos la velocidad de frames
    if (direction == "right") {
        xPosition += 5;
    } else {
        xPosition -= 5;
    }
    console.log(xPosition);

    // Pintamos el nuevo tramo
    ctx.fillStyle = verdeMatrix;
    ctx.fillRect(xPosition, yPosition, ancho, alto);
}

// Loop principal del juego
function loop() {

    // Definimos el movimiento que va a tomar en funcion de su posicion en el eje x (horizontal)
    
    // Si es > 0 y no toco el borde, va a la derecha
    if(xPosition >= 0 && !xBorder) {
        movement("right");
        if(xPosition == 470) {
            xBorder = !xBorder;

        }
    } 
    
    // Si es > 0 y ya toco borde, va a la izquierda
    if(xPosition >= 0 && xBorder) {
        //xBorder = !xBorder; // Indicamos que llego al limite
        movement("left");
        if(xPosition == 0) {
            xBorder = !xBorder;
        }
    }

    requestAnimationFrame(loop);
}

loop();
*/




/* ======================================================================
    Ejercicio 4.1 —  Rebotando en el borde inferior, simulando saltos
=======================================================================*/

/* Melloras respecto das anteriores resolucións:
- Borrado total do lienzo (+ sinxelo)
- Decelerar na subida
- Acelerar na baixada

Melloras:
- Incorporar game loop sen setInterval
- Sustituir setInterval por requestAnimationFrame: mesma funcionalidade pero optimizado polo navegador para graficos (60fps)
- Incorporar física: velocidade vertical, gravidade e salto
    - velocidade vertical: vy -> Cuanto se move o pixel en cada frame
    - gravidade: forza constante que empuxa para abaixo
    - salto: cambio instantaneo na velocidade cara arriba (negativo polas coordenadas "y")
*/

/*
////////////////////////////
// Variables del jugador //
let ancho = 30; // Definimos los pixeles del cuadrado
let alto = 30;
let posicionX = (canvas.width / 2) - ancho; // 220 -> Centrado horizontal
let posicionY = canvas.height - alto; 
let piso = canvas.height - alto; // 470 -> Fijamos la posicion del suelo


//////////////////////////
// Variables de fisica //
let velocidadY = 0; // Que tan rapido se mueve verticalmente
let gravedad = 0.5; // Aceleracion constante hacia abajo (que tan rapido cae)
let fuerzaSalto = -10; // Impulso inicial cara arriba (que tan fuerte salta)


/////////////
// Dibujo //
function dibujar() {
    // 1. Limpiamos todo el canvas (+ optimo)
    ctx.fillStyle = fondoNegro; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Dibujamos el cuadrado en su nueva posicion
    ctx.fillStyle = verdeMatrix;
    ctx.fillRect(posicionX, posicionY, ancho, alto);
}


/////////////////
// Actualizar //
function actualizar() { // Aplicamos la logica del salto
    // Subir implica decrecer las coordenadas Y (0 arriba de todo, -470 piso)

    velocidadY += gravedad; // Aplicamos gravedad a la velocidad
    
    posicionY += velocidadY; // Aplicamos velocidad a la posicion
    
    // Colision con el piso
    if(posicionY > piso) {
        posicionY = piso; // Lo forzamos a quedarse en el piso
        velocidadY = 0; // Ya no hay movimiento vertical
    }
}


////////////
// Input //
document.addEventListener("keydown", event => {
    if(event.code === "Space") {
        velocidadY = fuerzaSalto; // Aplicamos el impulso hacia arriba
        
        console.log(posicionY);
    }
});


////////////////
// Game Loop //
function loop() { // Bucle principal
    actualizar(); // Calculamos las matematicas
    dibujar(); // Renderizamos en la pantalla

    // Loop 60 veces x segundo, el juego esta activo esperando input
    requestAnimationFrame(loop); // // Llamamos al siguiente frame
    // console.log("test"); // Testeo de loop por consola
}



loop(); // Iniciar
*/



/*  Mejoras ================

* Movimiento horizontal
* Aceleración lateral
* Plataformas
* Fricción
* Gravedad variable
* Cámara
* Colisiones reales
* Aplicar **deltaTime**
*/





/* ======================================================================
    Ejercicio 4.2 —  Saltos + movimiento horizontal
=======================================================================*/


////////////////////////////
// Variables del jugador //
let ancho = 30; // Definimos los pixeles del cuadrado
let alto = 30;
let posicionX = (canvas.width / 2) - ancho; // 220 -> Centrado horizontal
let posicionY = canvas.height - alto; 
let piso = canvas.height - alto; // 470 -> Fijamos la posicion del suelo

let paredDerecha = canvas.width - ancho;
let paredIzquierda = 0;
let movimientoDerecha = null;


//////////////////////////
// Variables de fisica //
let velocidadY = 0; // Que tan rapido se mueve verticalmente
let gravedad = 0.5; // Aceleracion constante hacia abajo (que tan rapido cae)
let fuerzaSalto = -10; // Impulso inicial cara arriba (que tan fuerte salta)
let fuerzaCaida = 10;

let velocidadX = 0;
let deceleracionDer = 0.5;
let deceleracionIzq = -0.5;
let fuerzaIzq = -15; 
let fuerzaDer = 15; 


/////////////
// Dibujo //
function dibujar() {
    // 1. Limpiamos todo el canvas (+ optimo)
    ctx.fillStyle = fondoNegro; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Dibujamos el cuadrado en su nueva posicion
    ctx.fillStyle = verdeMatrix;
    ctx.fillRect(posicionX, posicionY, ancho, alto);
}


/////////////////
// Actualizar //
function actualizar() {
    
    ///////////////
    // Salto (Subir implica decrecer las coordenadas Y (0 arriba de todo, -470 piso)
    velocidadY += gravedad; // Aplicamos gravedad a la velocidad
    posicionY += velocidadY; // Aplicamos velocidad a la posicion
    
    // Colision con el piso
    if (posicionY > piso) {
        posicionY = piso; // Lo forzamos a quedarse en el piso
        velocidadY = 0; // Ya no hay movimiento vertical
    }

    // Colision con el techo
    if (posicionY < 0) {
        posicionY = 0;
        velocidadY = 0;
    }
    

    if (movimientoDerecha === true) {
        velocidadX += deceleracionDer;
        posicionX += velocidadX;
    }
    
    if (movimientoDerecha === false) {
        velocidadX -= deceleracionIzq;
        posicionX -= velocidadX;
    }

    // Colision pared derecha
    if (posicionX > paredDerecha) {
        posicionX = paredDerecha;
    }

    // Colision pared izquierda
    if (posicionX < paredIzquierda) {
        posicionX = paredIzquierda;
    }
}



////////////
// Input //
document.addEventListener("keydown", event => {

    console.log(event.code)

    //////////////////////////
    // SALTO
    if (event.code === "Space" || event.code === "ArrowUp") {
        velocidadY = fuerzaSalto; // Aplicamos el impulso hacia arriba
        console.log(posicionY);
    }

    if (event.code === "ArrowDown") {
        velocidadY = fuerzaCaida;
    }

    //////////////////////////
    // MOVIMIENTO HORIZONTAL
    if (event.code === "ArrowRight") {
        // posicionX += 20;
        velocidadX = fuerzaDer;
        movimientoDerecha = true;
        velocidadX = 0;
    }

    if (event.code === "ArrowLeft") {
        // posicionX -= 20;
        velocidadX = fuerzaIzq;
        movimientoDerecha = false;
        velocidadX = 0;
    }
});


////////////////
// Game Loop //
function loop() { // Bucle principal
    actualizar(); // Calculamos las matematicas
    dibujar(); // Renderizamos en la pantalla

    // Loop 60 veces x segundo, el juego esta activo esperando input
    requestAnimationFrame(loop); // // Llamamos al siguiente frame
    // console.log("test"); // Testeo de loop por consola
}


loop(); // Iniciar




/* =============================================================
    Ejercicio 5 — Movimiento circular con seno y coseno
============================================================= */

