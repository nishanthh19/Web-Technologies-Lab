<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
?>

<h1>Welcome to the Event!</h1>
<p>You are successfully logged in.</p>
<a href="logout.php">Logout</a>
