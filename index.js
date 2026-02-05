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
// Borramos el frame anterior, evitamos que queden rastros y lo ejecutamos en cada frame
function limpiar() {
    ctx.fillStyle = fondoNegro;
    ctx.fillRect(0, 0, game.width, game.height);
}

// Para colocar puntos en la pantalla, especificaremos esos puntos en los ejes 'x' e 'y'
function cubo({ x, y }) {
    const volumen = 20; // Definimos el tamaño del punto
    ctx.fillStyle = verdeMatrix;

    // Consideramos las coordenadas en base a las dimensiones del cubo (s/2)
    // Dibujamos cuadrados para representar vertices, objeto hecho de vertices
    ctx.fillRect(
        x - volumen/2, 
        y - volumen/2, 
        volumen, 
        volumen);
}


// Dibujamos lineas que unen los cubos (vertices), crean la forma del cubo y simulan las aristas
function linea(p1, p2) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = verdeMatrix;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}


/* Ajustamos al tamaño de la pantalla

- En matemáticas tenemos valores pequeños -1 a 1
- La pantalla trabaja en píxeles 0 a 800

Con la funcion pantalla convertimos coordenadas matemáticas en coodenadas reales del canvas

También invertimos el eje "y" porque en matemáticas "y" crece hacia arriba y en canvas hacia abajo
*/

// Adaptamos la formula al ancho game.width y al alto game.height
function pantalla(p) {
    // Queremos un valor que retorne de 0 al ancho y alto del canvas
    return {
        x: (p.x + 1) / 2 * game.width,
        // Ajustamos para que y positivo esté arriba (volteamos la coordenada y)
        y: (1 - (p.y + 1) / 2) * game.height
    }     
}


/* De 3D a 2D

- Canvas solo entiende x, y
- Un punto 3D es x, y, z
- En la funcion proyectar fingimos profundidad

    Perspectiva:
    - Si un objeto esta lejos (z grande) se ve pequeño
    - Si está cerca (z pequeño) se ve grande

*/

// Implementamos la formula que toma un punto tridimensional
function proyectar ({x, y, z}) {
    return { // Retorna un punto bidimensional
        x: x / z,
        y: y / z
    }
}

const FPS = 60;
let dz = 1; // Toma el offset del punto z
let angulo = 0;

// Actualizamos el eje z con el dz
// Movemos el cubo hacia adelante y o atras, simulamos profundidad
function translate_z({x, y, z}) {
    return {
        x, y, z: z + dz
    };
}


// Rotamos sobre el eje x
// Giramos el cubo, alrededor de un eje usando seno y coseno
function rotate_xz({x, y, z}, angulo) {
    const c = Math.cos(angulo);
    const s = Math.sin(angulo);

    return {
        x: x * c - z * s,
        y,
        z: x * s + z * c
    }
}

// Vertices "vs", definimos los 8 puntos del cubo
// Un cubo siempre tiene 8 vertices, 12 aristas y 6 caras
const vs = [
    // "Vanishing point"
    // Estos cuatro puntos acercándose hacia el centro simulan un alejamiento
    { x: 0.25, y: 0.25, z: 0.25 },
    { x: -0.25, y: 0.25, z: 0.25 },
    { x: -0.25, y: -0.25, z: 0.25 },
    { x: 0.25, y: -0.25, z: 0.25 },

    { x: 0.25, y: 0.25, z: -0.25 },
    { x: -0.25, y: 0.25, z: -0.25 },
    { x: -0.25, y: -0.25, z: -0.25 },
    { x: 0.25, y: -0.25, z: -0.25 },
];


// Faces "fs"
// Son indices, referencias a los vertices, un punto se conecta con otro formando las aristas del cubo
const fs = [
    // Array de indices para conectar como un poligono
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7]
]

function frame() {
    const dt = 1/FPS; // Delta time
    // dz += 1 * dt; // Incrementamos el offset y alejamos el elemento

    angulo += Math.PI*dt;
    limpiar();
    
    // Proyectamos el punto 3d en una vista 2d y luego tomamos la vista 2d y la proyectamos en la plantalla

    for (const v of vs) {
        // Eliminamos las aristas
        //cubo(pantalla(proyectar(translate_z(rotate_xz(v, angulo), dz))));
    }

    for (const f of fs) {
        for(let i = 0; i < f.length; ++i) {
            const a = vs[f[i]];
            const b = vs[f[(i + 1) % f.length]];

            const pa = pantalla(proyectar(translate_z(rotate_xz(a, angulo), dz)));

            const pb = pantalla(proyectar(translate_z(rotate_xz(b, angulo), dz)));

            // cubo(pa);
            // cubo(pb);
            linea(pa, pb) 

        }
    }

    setTimeout(frame, 1000/FPS);
}

setTimeout(frame, 1000/FPS);