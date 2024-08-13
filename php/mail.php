<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = "brandon12arias@gmail.com";
    $fullName = htmlspecialchars($_POST['full-name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $messageContent = htmlspecialchars($_POST['message']);

    $to = $correo;
    $subject = "İletişim mesajı";

    $message = "Birisi size bir iletişim mesajı gönderdi\r\n\r\n";
    $message .= "Adınız Soyadınız: $fullName\r\n";
    $message .= "Email: $email\r\n";
    $message .= "Mesajınız: $messageContent\r\n";

    $from = "web@bot.com";

    $separator = md5(time());

    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\"\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";

    $body = "--$separator\r\n";
    $body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $message . "\r\n";

    $response = array();
    if (mail($to, $subject, $body, $headers)) {
        $response['status'] = 'success';
        $response['message'] = 'İletişim e-postası başarıyla gönderildi.';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'İletişim e-postası gönderilirken hata oluştu.';
    }

    echo json_encode($response);
}
?>
