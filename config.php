<?php
    include "connection.php";
        if(isset($_POST['submit']))
        {
            $name = $_POST['fullname'];
            $phone_no = $_POST['phoneNo'];
            $email = $_POST['email'];
            $message = $_POST['message'];
            if($conn){
            $sql = "INSERT INTO 'contact-user' VALUES ($name,$phone_no,$email,$message)";
            $result = mysqli_query($conn,$sql);
            }
            else{
                echo "Error in data Entry!";
            }
            
        }

?>