<?php

session_start();
setcookie('nocheck', 'ok', time()+1800);

header( 'Location: http://gopayment.com' );

?>
