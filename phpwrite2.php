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
$title = $_POST["title"];
$stringEvent = $_POST["webevent"];
$stringContent = $_POST["content"];
$mysqldate = date("Y-m-d H:i:s"); 
$pageOffset = $_POST["offset"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO events (participant_id, page_title, event_type, datetime, content, page_offset)
VALUES (1234, '$title', '$stringEvent', '$mysqldate', '$stringContent', '$pageOffset')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
