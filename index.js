console.log(game);
const fondo = "#2c274b";
const primerPlano = "#00ff41";

// Ajustamos el ancho y alto de la interfaz <canvas>
game.width = 800;
game.height = 800;

// getContext("2d") nos permitirá renderizar en el <canvas>
const ctx = game.getContext("2d");
console.log(ctx);

// Para limpiar la pantalla la pintaremos de negro
function limpiar() {
    ctx.fillStyle = fondo;
    ctx.fillRect(0, 0, game.width, game.height);
}

// Para colocar puntos en la pantalla, especificaremos esos puntos en los ejes 'x' e 'y'
function punto(x, y) {
    const volumen = 20; // Definimos el tamaño del punto
    ctx.fillStyle = "#00ff41";
    ctx.fillRect(x, y, volumen, volumen);
}

limpiar();
punto(100, 100);