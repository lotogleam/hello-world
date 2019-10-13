<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <style>
            .input{
                margin-top:50px;   
            }
        </style>
    </head>
    <body>
        <div class="input col-12 mx-auto text-center">
            <?php
                echo "<h1>Regestration form</h1>";
            ?>
            <input class="col-3 text-center" type="text" placeholder="name"/>
            <input class="col-3 text-center" type="text" placeholder="email"/>
            <input class="col-3 text-center" type="text" placeholder="batch"/>
            <div class="buttonn">
                    <button class="btn btn-primary text-center col-2 btn-lg">submit</button>
            </div>
        </div>
    </body>
</html>