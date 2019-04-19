<?php

include './connections.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$name = $obj['name'];
$email = $obj['email'];
$phone_number = $obj['phone_number'];
if (mysqli_query($link, "INSERT INTO users(name, email, phone_number) VALUES ('$name', '$email', '$phone_number')")) {
    echo json_encode('Insert successfully!');
} else {
    echo json_encode('Insert failed!');
}

mysqli_close($link);

