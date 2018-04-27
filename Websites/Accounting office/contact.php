<?php

$name = $_POST['name'];
$numer = $_POST['numer'];
$message = $_POST['message'];

// email z którego ma być wysłana wiadomość
$from = "sample@email.com";

// email na który chcesz otrzymać wiadomość
$to = "example@email.com";

// tytuł jaki ma mieć ta wiadomość email
$tytul = "[PYTANIE] ze strony internetowej";

// treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imię i nazwisko: " . $name . "\n";
$wiadomosc .= "Nr tel: " . $numer . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($to, $tytul, $wiadomosc, "Od: <$from>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>
