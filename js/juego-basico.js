// Información del canvas
var canvas = document.getElementById('juego');
var ctx = canvas.getContext('2d');

// Tiempo actual
var tiempo = Date.now();

// Ficha del jugador
var ficha = {
    x: 450,             // Posición inicial en X
    y: 200,             // Posición inicial en Y
    ancho: 50,          // Ancho de la ficha
    alto: 50,           // Alto de la ficha
    velocidad: 256,     // Velocidad de la ficha
    color: '#00F'       // Color de la ficha
};

// Almacenar y liberar infomación del teclado
var teclasPresionadas = {};
window.addEventListener('keydown', function(e) {
    teclasPresionadas[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete teclasPresionadas[e.keyCode];
});

// Actualiza el estado del juego
function update(mod) {
    // Flecha izquierda
    if (teclasPresionadas[37]) {
        ficha.x -= ficha.velocidad * mod;
    }
    // Flecha arriba
    if (teclasPresionadas[38]) {
        ficha.y -= ficha.velocidad * mod;
    }
    // Flecha derecha
    if (teclasPresionadas[39]) {
        ficha.x += ficha.velocidad * mod;
    }
    // Flecha abajo
    if (teclasPresionadas[40]) {
        ficha.y += ficha.velocidad * mod;
    }
}

// Método para dibujar en el canvas
function render() {
    // Dibuja el fondo
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Dibuja la ficha
    ctx.fillStyle = ficha.color;
    ctx.fillRect(ficha.x, ficha.y, ficha.ancho, ficha.alto);
}

// Método principal
function main() {
    // Actualiza
    update((Date.now() - tiempo) / 1000);
    // Dibuja
    render();
    // Toma el nuevo valor del tiempo
    tiempo = Date.now();
}

// Se llama a la función cada 10 milisegundos
setInterval(main, 10);