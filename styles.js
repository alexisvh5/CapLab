function filtrarTratamientos() {
    // Obtener el valor del filtro
    var filtro = document.getElementById('filtro-tratamientos').value;

    // Obtener todas las tarjetas de tratamiento
    var tratamientos = document.querySelectorAll('.tratamiento-card');

    // Iterar sobre cada tarjeta de tratamiento
    tratamientos.forEach(function(tratamiento) {
        // Obtener el tipo de tratamiento que está asociado con esta tarjeta
        var tipoTratamiento = tratamiento.getAttribute('data-tratamiento');

        // Mostrar u ocultar según el filtro seleccionado
        if (filtro === 'todos' || filtro === tipoTratamiento) {
            tratamiento.style.display = 'block'; // Mostrar
        } else {
            tratamiento.style.display = 'none'; // Ocultar
        }
    })};