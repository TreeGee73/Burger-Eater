-- Drops the database if it exists
DROP DATABASE IF EXISTS burgers_db;

-- Initiate database creation
CREATE DATABASE burgers_db;

-- Tell MySQL to use database
USE burgers_db;

-- Create burgers table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);
