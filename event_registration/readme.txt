The file location shoud be like  "C:\xampp\htdocs\event_registration"

create a database named "event_db" in phpmyadmin

5 colums

sql code:

CREATE DATABASE event_db;

USE tech_event;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
