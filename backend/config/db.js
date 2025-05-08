const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clickfit",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return;
  }
  initializeDatabase();
});

function initializeDatabase() {
  const createTables = `
    -- Create Users Table with Unique Email
    CREATE TABLE IF NOT EXISTS users (
      ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL UNIQUE,
      password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
      type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
      active TINYINT DEFAULT 1
    );

    -- Create Images Table
    CREATE TABLE IF NOT EXISTS images (
      ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      image_url VARCHAR(500) CHARACTER SET 'utf8mb4' NOT NULL,
      uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  db.query(createTables, (err) => {
    if (err) {
      return;
    }

    createStoredProcedure();
  });
}

function createStoredProcedure() {
  const procedure = `
    DROP PROCEDURE IF EXISTS addUser;
    CREATE PROCEDURE addUser (
        IN user_email VARCHAR(255),
        IN user_password VARCHAR(255),
        IN user_type VARCHAR(255),
        IN user_active TINYINT
    )
    BEGIN
        -- Check if the email already exists
        IF EXISTS (SELECT 1 FROM users WHERE email = user_email) THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Email already exists';
        ELSE
            -- If not, insert the new user
            INSERT INTO users (email, password, type, active)
            VALUES (user_email, user_password, user_type, user_active);
        END IF;
    END;
  `;

  db.query(procedure, (err) => {
    if (err) {
      return;
    }
  });
}

module.exports = db;
