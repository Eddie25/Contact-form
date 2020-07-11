

<?php

$name = $_POST['name'];

$visitor_email = $_POST['email'];

$message = $_POST['message'];

$email_from = 'kiarieedward10@yahoo.com';

$email_subject = "You are Amazing!!!";

$email_body = "Name : $name.\n". "Email : $visitor_email.\n". "Message : $$message.\n";

$to = "kiarieedward324@gmail.com";

$headers = "From : $email_from \r \n";

$headers = "Reply_To : $visitor_email \r \n";

mail($to, $email_subject, $email_body, $headers);

header("Location: https://github.com/Eddie25/Contact-form/blob/master/public_html/index.html");

?>
