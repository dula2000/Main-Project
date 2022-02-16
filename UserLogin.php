<?php


session_start();
$SESSION;

include("connection.php");
include("functions.php");

 $user_data = check_login($con);




?>



<!DOCTYPE html>
<html>
    <head>
        <title> Innovate User login </title>
</head>
<body>
    <a href="logout.php"> Logout </a>
    <h1> This is the User login </h1>

    <br>
    Hello,username.

</body>
</html>