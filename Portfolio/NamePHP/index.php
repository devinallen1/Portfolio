<!DOCTYPE html>
<html>
<head>
    <title>Store your Name in Unicorn Cloud</title>
</head>
<body>
<h1>Welcome to the Rainbow cloud storage</h1>
<p> Please Enter your whole name</p>
<form action="DbHandler.php" method="post">
    First Name:<br>
    <input type="text" name="firstname"><br>
    Last name:<br>
    <input type="text" name="lastname"><br><br>
    <input type="submit" value="Submit">
</form>

<?php
    $sql = "SELECT * FROM UserID;";
    $result = mysqli_query($connection, $sql);
    $checkResult = mysqli_num_rows($result);

    if($checkResult > 0){
        echo $result;
    }
?>

</body>
</html>