$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Evita el envío inmediato del formulario

        let nombre = $('input[name="nombre"]').val();
        let correo = $('input[name="correo"]').val();
        let razon = $('#razon').val();
        let message = '';

        if (correo === '' || razon === 'razon' || nombre == '') {
            message = 'Por favor, completa los campos obligatorios.';
        } else {
            message = '¡La información ha sido enviada exitosamente!';
        }

        // Mostrar el popup con el mensaje correspondiente
        $('#popup-message').text(message);
        $('#popup').show();
    });

    // Cerrar el popup cuando se hace clic en el botón de cerrar
    $('.close').click(function() {
        $('#popup').hide();
        // Limpiar el Formulario 
        $('form').trigger('reset');

    });
});

