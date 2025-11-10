const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

// Fecha objetivo: 9 de diciembre 2025 a las 00:00
const objetivo = new Date("December 18, 2025 11:00:00").getTime();

// Función para actualizar la cuenta atrás
function actualizarCuenta() {
    const ahora = new Date().getTime();
    const diferencia = objetivo - ahora;

    if (diferencia <= 0) {
        // Si la fecha ya pasó
        clearInterval(intervalo);
        days.textContent = 0;
        hours.textContent = 0;
        min.textContent = 0;
        sec.textContent = 0;
        return;
    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar el HTML
    days.textContent = d;
    hours.textContent = h;
    min.textContent = m;
    sec.textContent = s;
}

// Actualizar cada segundo
const intervalo = setInterval(actualizarCuenta, 1000);

// Llamada inicial inmediata
actualizarCuenta();



