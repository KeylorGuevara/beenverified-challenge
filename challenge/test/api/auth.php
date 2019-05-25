<?php

session_start();
$_POST = json_decode(file_get_contents('php://input'), true);


if(isset($_POST) && !empty($_POST)) {
    $username= $_POST['userEmail'];
    $password= $_POST['userPassword'];

    if($username == 'admin' and $password == 'admin'){
        $_SESSION['user'] = 'admin';
    ?>
    {
        "success": true,
        "secret": "Access!"
    } 
    <?php
} else{
    ?>
    {
        "success": false,
        "secret": "NO Access!"
    }
    <?php
}
}else{
    ?>
    {
        "success": false,
        "secret": "Only POST access !"
    }
    <?php
}

?>