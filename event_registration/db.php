<?php
$host = 'localhost'; // Your MySQL host
$db = 'event_db';    // Your database name
$user = 'root';      // Your MySQL username
$pass = '';          // Your MySQL password
$port = '3306';      // Default MySQL port

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
