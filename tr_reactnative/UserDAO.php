<?php

$GLOBALS['link'] = mysqli_connect('localhost', 'root', '', 'tr_users');
$GLOBALS['json'] = file_get_contents('php://input');
$GLOBALS['obj'] = json_decode($json, true);

if (!$link) {
    echo "Error: Unable to connect to MySQL";
}

if (isset($_GET['function'])) {
    $_GET['function']();
}

function insert() {
    $link = $GLOBALS['link'];
    $obj = $GLOBALS['obj'];

    $name = $obj['name'];
    $email = $obj['email'];
    $phone_number = $obj['phone_number'];
    if (mysqli_query($link, "INSERT INTO users(name, email, phone_number) VALUES ('$name', '$email', '$phone_number')")) {
        echo json_encode('Insert successfully!');
    } else {
        echo json_encode('Insert failed!');
    }

    mysqli_close($link);
}

function show() {
    $link = $GLOBALS['link'];
    $json = $GLOBALS['json'];
    $result = mysqli_query($link, "SELECT * FROM users");
    if (mysqli_num_rows($result)) {
        while ($row[] = mysqli_fetch_assoc($result)) {
            $json = json_encode($row);
        }
    } else {
        echo 'Result not found!';
    }
    echo $json;
    mysqli_close($link);
}

function update() {
    $link = $GLOBALS['link'];
    $obj = $GLOBALS['obj'];

    $id = $obj['id'];
    $name = $obj['name'];
    $email = $obj['email'];
    $phone_number = $obj['phone_number'];

    if (mysqli_query($link, "UPDATE users SET name = '$name', email = '$email', phone_number = '$phone_number' WHERE id = '$id'")) {
        echo json_encode('Update successfully!');
    } else {
        echo json_encode('Update failed!');
    }
    mysqli_close($link);
}

function delete() {
    $link = $GLOBALS['link'];
    $obj = $GLOBALS['obj'];

    $id = $obj['id'];

    if (mysqli_query($link, "DELETE FROM users WHERE id = '$id'")) {
        echo json_encode('Delete successfully!');
    } else {
        echo json_encode('Delete failed!');
    }
    mysqli_close($link);
}
