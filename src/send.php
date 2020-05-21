<?php


$userNameControl = $_POST['userNameControl'];
$userPhoneControl = $_POST['userPhoneControl'];

$userNameModal = $_POST['userNameModal'];
$emailModal = $_POST['userEmailModal'];
$phoneModal = $_POST['userPhoneModal'];

$userNameForm = $_POST['userNameForm'];
$userPhoneForm = $_POST['userPhoneForm'];
$userQuestionForm = $_POST['userQuestionForm'];


// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'romantrigidko@gmail.com';                     // SMTP username
    $mail->Password   = 'Qazwsxedc46127';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('romantrigidko@gmail.com', 'Роман');
    $mail->addAddress('romansanwow@gmail.com');     // Add a recipient
    

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userNameModal}, его телефон ${phoneModal} и так же его почта ${userEmailModal}";
    $mail->Body    = "Имя пользователя: ${userNameControl}, его телефон ${userPhoneControl}.";
    $mail->Body    = "Имя пользователя: ${userNameForm}, его телефон: ${userPhoneForm} и так же его вопрос ${userQuestionForm}";
    

    $mail->send();
    header('location:thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправленно, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}