<?php

session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST")
{
    //something was posted
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];

    if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
    {
        //read from database
        
        $query = "select * from users where user_name = '$user_name' limit 1";

        $result = mysqli_query($con,$query);


        if($result)
        {
        //if($result && myslqi_num_rows($result)>0)
        //{
           $user_data = mysqli_fetch_assoc($result);
           if($user_data['password']===$password)
           {
               $_SESSION['user_id'] = $user_data['user_id'];
            header("Location:index.html");
            die;
           }
       // }
       }
    }
        


}
    else{
        echo"Please enter some valid information!";
    }


?>

<!DOCTYPE html>
<html>
    <head>
        <title> Login </title>
        <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="log" id="box">

    <form method="post">

    <div class="loginn"> Login </div> 

        <input class="C" type="text" name="user_name"><br><br>
        <input class="B" type="password" name="password"><br><br>

        <input class="A" id="button" type="submit" value="Login"><br><br>

        <a class="Sig" href="signup.php"> Signup </a>

    </form>
</div>

</body>
</html>