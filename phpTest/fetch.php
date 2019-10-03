<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PHP Fetch</title>
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
        <div>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Email</th>
        <th>Batch</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
        </tr>   
    </tbody>
  </table>
        </div>
    </body>
</html>