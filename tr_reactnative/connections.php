<?php

$link = mysqli_connect('localhost', 'root', '', 'tr_users');

if (!$link) {
    echo "Error: Unable to connect to MySQL";
}