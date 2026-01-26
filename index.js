console.log(game);
const fondoNegro = "#2c274b";
const verdeMatrix = "#00ff41";

// Ajustamos el ancho y alto de la interfaz <canvas>
game.width = 800;
game.height = 800;

// getContext("2d") nos permitirá renderizar en el <canvas>
const ctx = game.getContext("2d");
console.log(ctx);

// Para limpiar la pantalla la pintaremos de negro
function limpiar() {
    ctx.fillStyle = fondoNegro;
    ctx.fillRect(0, 0, game.width, game.height);
}

// Para colocar puntos en la pantalla, especificaremos esos puntos en los ejes 'x' e 'y'
function cubo({ x, y }) {
    const volumen = 20; // Definimos el tamaño del punto
    ctx.fillStyle = verdeMatrix;

    // Consideramos las coordenadas en base a las dimensiones del cubo (s/2)
    ctx.fillRect(
        x - volumen/2, 
        y - volumen/2, 
        volumen, 
        volumen);
}


// Adaptamos la formula al ancho game.width y al alto game.height
function pantalla(p) {
    // Queremos un valor que retorne de 0 al ancho y alto del canvas
    return {
        x: (p.x + 1) / 2 * game.width,
        // Ajustamos para que y positivo esté arriba (volteamos la coordenada y)
        y: (1 - (p.y + 1) / 2) * game.height
    }     
}


// Implementamos la formula que toma un punto tridimensional
function proyectar ({x, y, z}) {
    return { // Retorna un punto bidimensional
        x: x / z,
        y: y / z
    }
}

const FPS = 60;
let dz = 0; // Toma el offset del punto z


function frame() {
    const dt = 1/FPS; // Delta time
    dz += 1 * dt; // Incrementamos el offset
    limpiar();
    
    // Estos cuatro puntos acercándose hacia el centro simulan un alejamiento
    cubo(pantalla(proyectar({ x: 0.5, y: 0.5, z: 1 + dz })));
    cubo(pantalla(proyectar({ x: -0.5, y: 0.5, z: 1 + dz })));
    cubo(pantalla(proyectar({ x: 0.5, y: -0.5, z: 1 + dz })));
    cubo(pantalla(proyectar({ x: -0.5, y: -0.5, z: 1 + dz })));

    setTimeout(frame, 1000/FPS);
}

setTimeout(frame, 1000/FPS);