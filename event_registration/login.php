<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    
    // Validate input
    if (empty($email) || empty($password)) {
        echo "Email and password are required!";
        exit;
    }

    // Check if email exists
    $stmt = $pdo->prepare("SELECT id, password FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo "Login successful!";
        // Start a session and store user information if needed
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $email;
        header("Location: welcome.php"); // Redirect to a welcome page
    } else {
        echo "Invalid email or password!";
    }
}
?>

<!-- Login Form -->
<form method="POST" action="">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <button type="submit">Login</button>
</form>
