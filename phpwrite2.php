<?php
$myFile = "ttt.txt";

$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = $_POST["data"];
fwrite($fh, $stringData);
fclose($fh);
?> 
<?php
$servername = "localhost";
$username = "root";
$password = "literacy";
$dbname = "eye_tracking_events";
$stringEvent = $_GET["webevent"];
$stringContent = $_GET["content"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO events (participant_id, event_type, content)
VALUES (1234, '$stringEvent', '$stringContent')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>