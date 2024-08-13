<?php
header('Content-Type: application/json');

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar los datos del formulario
    $correo = "brandon12arias@gmail.com";
    $fullName = htmlspecialchars($_POST['full-name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $messageContent = htmlspecialchars($_POST['message']);

    // Configurar el correo de confirmación
    $to = $correo;
    $subject = "Mensaje de contacto";

    $message = "Alguien te envió un mensaje de contacto\r\n\r\n";
    $message .= "Nombre completo: $fullName\r\n";
    $message .= "Correo electrónico: $email\r\n";
    $message .= "Mensaje: $messageContent\r\n";

    $from = "web@bot.com";

    // Crear un límite único
    $separator = md5(time());

    // Encabezados
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\"\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";

    // Cuerpo del mensaje
    $body = "--$separator\r\n";
    $body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $message . "\r\n";

    // Enviar el correo de confirmación
    $response = array();
    if (mail($to, $subject, $body, $headers)) {
        $response['status'] = 'success';
        $response['message'] = 'Correo de contacto enviado exitosamente.';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error al enviar el correo de contacto.';
    }

    echo json_encode($response);
}
?>
