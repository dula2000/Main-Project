<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@innovate.lk';

$email_subject = 'New form submission';

$email_body = "User name: $name.\n".
              "User email: $visitor_email.\n".
              "User subject: $subject.\n".
              "User message: $message.\n";

$to = 'innovate.lk';

$headers = "From: $email_from \r\n";

$headers = "Reply_to: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: Contact.html");

?>