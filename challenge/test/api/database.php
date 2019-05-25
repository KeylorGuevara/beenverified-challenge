<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin'){
    echo '{
        "secret": "This is a contact with DB. Success!",
        "success": true
    }';
}
else{
    echo '{
        "secret": "This is a contact with DB. NO ACCESS!",
        "success": false
    }';

}

?>