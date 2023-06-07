const getSql = require('./getSql.js');
// console.log('getSql:', getSql);
// console.log('Imported createTable:', getSql.createTable);
// console.log('Imported dropTable:', getSql.dropTable);
// console.log('Imported dropTable:', getSql.insertData);

// getSql.dropTable('internship_survey');
// getSql.dropTable('internship');
// getSql.dropTable('student');
// getSql.dropTable('company');
// getSql.dropTable ('tag');
// getSql.dropTable('form');

// Creating the student table
getSql.createTable(
  'student',
  'student_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'first_name VARCHAR (20) NOT NULL',
  'last_name VARCHAR (20) NOT NULL',
  'email VARCHAR (50) NOT NULL',
  'UNIQUE (email)',
  'UNIQUE (student_id)'
);
console.log("Student table created successfully");

// Creating the company table
getSql.createTable(
  'company',
  'company_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'name VARCHAR (60) NOT NULL'
);
console.log("Company table created successfully");

// Creating the tag table
getSql.createTable(
  'tag',
  'tag_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'name VARCHAR (30)',
  'UNIQUE (tag_id)'
);
console.log("Tag table created successfully");

// Creating the form table
getSql.createTable(
  'form',
  'form_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'title VARCHAR (50)',
  'description TEXT',
  'UNIQUE (form_id)'
);
console.log("Form table created successfully");

// Creating the internship table
getSql.createTable(
  'internship',
  'internship_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'title VARCHAR (50) NOT NULL',
  'start_date DATE',
  'end_date DATE',
  'status INTEGER (1)',
  'company_id INTEGER NOT NULL',
  'student_id INTEGER',
  'FOREIGN KEY (company_id) REFERENCES company (company_id)',
  'FOREIGN KEY (student_id) REFERENCES student (student_id)',
  'UNIQUE (internship_id)'
);
console.log("Internship table created successfully");

// Creating the internship_survey table
getSql.createTable(
  'internship_survey',
  'survey_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'date_submitted DATE',
  'text_data TEXT',
  'form_id INTEGER NOT NULL',
  'internship_id INTEGER NOT NULL',
  'student_id INTEGER NOT NULL',
  'tag_id INTEGER NOT NULL',
  'FOREIGN KEY (form_id) REFERENCES form(form_id)',
  'FOREIGN KEY (internship_id) REFERENCES internship(internship_id)',
  'FOREIGN KEY (student_id) REFERENCES student(student_id)',
  'FOREIGN KEY (tag_id) REFERENCES tag(tag_id)', 
  'UNIQUE (survey_id)'
);
console.log("Internship survey table created successfully");


getSql.addStudent('Luke',  'Hepokoski', 'lkhepokoski2129@eagle.fgcu.edu' );
getSql.addStudent('Jose',  'Suarez', 'jasuarez4261@eagle.fgcu.edu' );
getSql.addStudent('Christopher',  'Tscheschlog', 'cgtscheschlog@eagle.fgcu.edu' );


getSql.insertData('tag', { tag_id: 1, name: 'Java' });
getSql.insertData('tag', { tag_id: 2, name: 'C++' });
getSql.insertData('tag', { tag_id: 3, name: 'C#' });
getSql.insertData('tag', { tag_id: 4, name: 'C' });
getSql.insertData('tag', { tag_id: 5, name: 'Python' });
getSql.insertData('tag', { tag_id: 6, name: 'Assembly' });
getSql.insertData('tag', { tag_id: 7, name: 'JavaScript' });
getSql.insertData('tag', { tag_id: 8, name: 'App Developer intern' });
getSql.insertData('tag', { tag_id: 9, name: 'Backend Developer intern' });
getSql.insertData('tag', { tag_id: 10, name: 'Frontend Developer intern' });
getSql.insertData('tag', { tag_id: 11, name: 'FullStack Developer intern' });
getSql.insertData('tag', { tag_id: 12, name: 'Summer Internship' });
getSql.insertData('tag', { tag_id: 13, name: 'Fall Internship' });
getSql.insertData('tag', { tag_id: 14, name: 'Spring Internship' });
getSql.insertData('tag', { tag_id: 15, name: 'Swift' });
getSql.insertData('tag', { tag_id: 16, name: 'Kotlin' });
getSql.insertData('tag', { tag_id: 17, name: 'SQL' });
getSql.insertData('tag', { tag_id: 18, name: 'HTML' });
getSql.insertData('tag', { tag_id: 19, name: 'PHP' });
getSql.insertData('tag', { tag_id: 20, name: 'CSS' });

console.log("DONE CALLER");