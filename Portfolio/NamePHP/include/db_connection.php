<?php

function OpenConnection() {
    $dbHost = "sql201.epizy.com";
    $dbUser = "epiz_24388362";
    $dbPassword = "FartingUnicorn";
    $db = "epiz_24388362_RainbowDB";

    $connect = new mysql_connect($dbHost, $dbUser, $dbPassword, $db) or die("Couldn't connect");


    return $connect
}

function CloseConnection($connect) {
    $connect -> close();
}

?>