<?PHP

$dbServername = "localhost:3306";
$dbUsername = "id10699246_unicorn";
$dbPassword = "allen";
$dbName = "UserID";
$recevedFirstname = $_POST["firstname"]
$recevedLastname = $_POST["lastname"]
echo "Hello DB manager";
mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
echo "failed to connect";
// if ($connection->connection_aborted) {
//     die("Failed to connect to DB:".$connection->connection_aborted);
// }
// else {
//     echo "Connected to DB";
// }

mysql_query("INSERT INTO UserID (FirstName, LastName) VALUES('$recevedFirstname', '$recevedLastname')");
mysql_close();

?>
