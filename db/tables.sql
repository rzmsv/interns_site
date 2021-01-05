CREATE TABLE interns (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     lastname VARCHAR(255) NOT NULL,
     birthday VARCHAR(50) NOT NULL,
     tell VARCHAR(30) NOT NULL,
     email VARCHAR(50) NOT NULL UNIQUE,
     password VARCHAR(255),
     pic VARCHAR(100),
     trendency VARCHAR(50) NOT NULL,
     admin VARCHAR(10) NOT NULL DEFAULT "FALSE",
     description VARCHAR(800) NOT NULL DEFAULT "empty",
     education VARCHAR(500),
     grade INT,
     instructor VARCHAR(500),
     mentor VARCHAR(50),
     created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE skills(
     id INT PRIMARY KEY AUTO_INCREMENT,
     user_skill VARCHAR(50),
     user_id INT,
     FOREIGN KEY(user_id) REFERENCES interns(id),
     created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE experiences(
     id INT PRIMARY KEY AUTO_INCREMENT,
     user_experience VARCHAR(255),
     user_id INT,
     FOREIGN KEY(user_id) REFERENCES interns(id),
     created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE workPics(
     id INT PRIMARY KEY AUTO_INCREMENT,
     pics VARCHAR(150),
     user_id INT,
     FOREIGN KEY(user_id) REFERENCES interns(id),
     created_at TIMESTAMP DEFAULT NOW()
);