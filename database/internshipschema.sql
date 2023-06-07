-- DROP TABLE internship_survey;
-- DROP TABLE form;
-- DROP TABLE company;
-- DROP TABLE  internship;
-- DROP TABLE student;
-- DROP TABLE tag;

CREATE TABLE student (
  student_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (20) NOT NULL,
  last_name VARCHAR (20) NOT NULL,
  email VARCHAR (50) NOT NULL,
  UNIQUE (email),
  UNIQUE (student_id)
);

CREATE TABLE internship(
    internship_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR (50), NOT NULL,
    start_date DATE,
    end_date DATE,  
    status INTEGER (1),
    company_id INTEGER NOT NULL,
    student_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES company,
    FOREIGN KEY (student_id) REFERENCES student,
    UNIQUE (internship_id)
);

CREATE TABLE company (
    company_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR,
    UNIQUE (company_id)

);

CREATE TABLE tag (
    tag_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR (30),
    UNIQUE (tag_id)

);

CREATE TABLE form (
    form_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR (50),
    description TEXT,
    UNIQUE (form_id)
);

CREATE TABLE internship_survey(
    survey_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_submitted DATE,
    text_data TEXT,
    form_id INTEGER NOT NULL,
    internship_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY (form_id) REFERENCES form,
    FOREIGN KEY (internship_id) REFERENCES internship,
    FOREIGN KEY (student_id) REFERENCES student,
    FOREIGN KEY (tag_id) REFERENCES tag,
    UNIQUE (survey_id)
);


-- DML SQL Statements for Assignment 2

-- Select student by username for login
SELECT *
FROM student
WHERE email = 'email';

-- List of prior submissions by student id
SELECT *
FROM internship_survey
WHERE student_id = 'student_id';

-- list of companies
SELECT name
FROM company;

-- list of tags
SELECT name
FROM tag;

-- Update statement to edit text entered into submitted data
UPDATE internship_survey
SET text_data = ('value');

-- insert for new company
INSERT INTO company (company_id, name)
VALUES ('company_id', 'name');

-- insert for new tags
INSERT INTO tag (tag_id, name)
VALUES ('tag_id', 'name');

-- Create view for submission data
CREATE VIEW submission_data AS
SELECT isv.survey_id, isv.date_submitted,
s.first_name, s.last_name, s.email,
c.name AS company_name,
i.title AS internship_title,
(
  SELECT GROUP_CONCAT(t2.name, ', ')
  FROM internship_survey isv2
  JOIN tag t2 ON isv2.tag_id = t2.tag_id
  WHERE isv2.survey_id = isv.survey_id
) AS tag_names
FROM internship_survey isv
JOIN company c ON isv.company_id = c.company_id
JOIN internship i ON isv.internship_id = i.internship_id
JOIN student s ON isv.student_id = s.student_id;


