<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    
    // Validate input
    if (empty($username) || empty($email) || empty($password)) {
        echo "All fields are required!";
        exit;
    }
    
    // Check if email or username already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :username OR email = :email");
    $stmt->execute(['username' => $username, 'email' => $email]);
    if ($stmt->rowCount() > 0) {
        echo "Username or email already taken!";
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert new user
    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    if ($stmt->execute(['username' => $username, 'email' => $email, 'password' => $hashed_password])) {
        echo "Registration successful!";
    } else {
        echo "Registration failed!";
    }
}
?>

<!-- Registration Form -->
<form method="POST" action="">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <button type="submit">Register</button>
</form>
