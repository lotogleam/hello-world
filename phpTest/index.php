<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PHP Test</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    </head>
    <body>
        <?php
            $hostname="localhost";
            $username="root";
            $password="";
            $db="db_test";

            $con=new mysqli($hostname,$username,$password,$db);
            if($con->connect_error){
                die("Unable to connect");
            }
             if(isset($_POST["name"])){
                $insertQ="INSERT INTO students(name,email,batch) VALUES('".$_POST["name"]."','".$_POST["email"]."','".$_POST["batch"]."')";
                $result=$con->query($insertQ);
                if(!$result){
                    echo ("unable to take data".$con->error);
                }  
             }
        ?>
        <div class="container">
            <?php
                echo "<h1>Registration Form</h1>";
            ?>
            <form name="register" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>">
                <div class="form-group">
                <label>Name:</label>
                <input type="text" name="name" placeholder="Enter name" class="form-control"/>
                </div>
                <div class="form-group">
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter email" class="form-control"/>
                </div>
                <div class="form-group">
                <label>Batch:</label>
                <input type="batch" name="batch" placeholder="Enter batch" class="form-control"/>
                </div>
                <div class="form-group">
                <input type="submit" name="submit" class="btn btn-primary"/> 
                </div>
            </form>
        </div>
    </body>
</html>