<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $db = 'contact_us';
    $conn = mysqli_connect($servername,$username,$password,$db);
        if($conn->connect_error)
        {
            echo"Error Database Connection..".$conn->connect_error;
        }
        $conn->close();
?>