<?php
/**
 * Created by PhpStorm.
 * User: jeremy
 * Date: 24/8/17
 * Time: 8:55 AM
 */


$servername = "35.197.186.109";
$username = "root";
$password = "eduwell";
$dbname = "Edu_Well";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Could not connect: " . $conn->connect_error);
}

$sql = "SELECT * from SafeSchool";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo json_encode($row);
    }
} else {
    echo "0 result";
}


$conn->close();
?>