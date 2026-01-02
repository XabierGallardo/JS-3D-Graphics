# Ejercicios 2D `<canvas>`

```js
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
```

##  Ejercicio 1 — Dibuja una cuadrícula (base para coordenadas)
```js
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
```

![sample cuadricula](img/1Cuadricula.png)

---

##  Ejercicio 1.2 -> Tablero tipo ajedrez
```js
const anchoCuadricula = 50;
const altoCuadricula = 50;
const cantidadTotal = (canvas.width / anchoCuadricula) * (canvas.height / altoCuadricula);

let posicionY = 0;
let origenX = 0;
let origenY = 0;

for(let i = 0; i < cantidadTotal; i++) {

    // Los pares en el eje vertical arrancan con el verde
    if(posicionY % 2 === 0) {
        
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
        posicionY += 1;
    }
}
```

![sample ajedrez](img/1Ajedrez.png)

---


##  Ejercicio 2 — Dibuja un círculo donde haga clic el mouse

```js
canvas.addEventListener("click", (event) => {

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
```

![sample cuadricula](img/2CirculoClick.png)