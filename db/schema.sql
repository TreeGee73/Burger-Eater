-- Drops the database if it exists
DROP DATABASE IF EXISTS burgers_db;

-- Initiate database creation
CREATE DATABASE burgers_db;

-- Tell MySQL to use database
USE burgers_db;

-- Create burgers table
CREATE TABLE bugers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE
);
