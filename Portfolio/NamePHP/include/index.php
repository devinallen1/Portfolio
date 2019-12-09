<?php
include 'db_connection.php';

$connect = OpenConnection();

echo "Connected Successfully";

CloseConnection($connect);
?>