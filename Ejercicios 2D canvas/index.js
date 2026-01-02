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
        ctx.fillRect(50, 50, 30, 30)
        
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
    
