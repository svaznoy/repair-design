<?php

$userNameModal = $_POST['userNameModal'];
$userPhoneModal = $_POST['userPhoneModal'];
$userEmailModal = $_POST['userEmailModal'];


// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mailmodal = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mailmodal->SMTPDebug = 0;                      // Enable verbose debug output
    $mailmodal->CharSet = 'UTF-8';
    $mailmodal->isSMTP();                                            // Send using SMTP
    $mailmodal->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mailmodal->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mailmodal->Username   = 'romantrigidko@gmail.com';                     // SMTP username
    $mailmodal->Password   = 'Qazwsxedc46127';                               // SMTP password
    $mailmodal->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mailmodal->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mailmodal->setFrom('romantrigidko@gmail.com', 'Роман');
    $mailmodal->addAddress('romansanwow@gmail.com');     // Add a recipient
    

    // Content
    $mailmodal->isHTML(true);                                  // Set email format to HTML
    $mailmodal->Subject = 'Новая заявка с сайта';
    $mailmodal->Body = "Имя пользователя: ${userNameModal}, его телефон: ${userPhoneModal} и так же его почту ${userEmailModal}";
    

    

    if ($mailmodal->send()) {
        echo "ok";
    }  else {
        echo "Письмо не отправленно, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }

} catch (Exception $e) {
    echo "Письмо не отправленно, есть ошибка. Код ошибки: {$mailmodal->ErrorInfo}";
}
