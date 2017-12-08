-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create a database called programming_db --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(4) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30),
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP(expr),
  -- Creates a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  
  PRIMARY KEY (id)
);


