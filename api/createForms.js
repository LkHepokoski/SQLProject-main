const getSql = require('./getSql.js');


//getSql.insertData('internship_survey', {date_submitted: '2023-04-15', form_id: '6', text_data: '', internship_id: '1', student_id: '5',  tag_id: '5'});

//getSql.insertData('internship', {title: 'Data Science Intern', start_date: '2023-04-25', end_date: '2023-10-25', status: '0', company_id: 2, student_id: 5})

// getSql.insertData('company', {name: 'Virtual Solutions Inc.'});
// getSql.insertData('company', {name: 'Data Insights Co.'});
//getSql.insertData('company', {name: 'CyberSafe'});
// getSql.insertData('company', {name: 'Bright Tech Inc.'});
// getSql.deleteData('form', 'title = \'Data Science Intern\'');
// console.log("DROPPED");

// getSql.createTable(
//     'form',
//     'form_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
//     'title VARCHAR (50)',
//     'description TEXT',
//     'UNIQUE (form_id)'
//   );
// console.log("CREATED");
// getSql.insertData('form', {title: "Front-end Intern", description: 'Company: Bright Tech Inc.\n\nAbout the Job:\nBright Tech Inc. is seeking a highly motivated Front-end Intern to join our team. As a Front End Intern, you will work closely with our experienced developers to build and maintain our web applications. You will also have the opportunity to learn and grow as a developer while working on exciting projects.\n\nValue:\nAs a Front End Intern at Bright Tech Inc., you will gain hands-on experience with the latest web development technologies and frameworks. You will also have the opportunity to work on real-world projects and make meaningful contributions to our team. Additionally, you will receive mentorship and guidance from experienced developers, which will help you grow as a developer and prepare you for future career opportunities.\n\nResponsibilities:\nDevelop and maintain web applications using HTML, CSS, and JavaScript\nCollaborate with our design team to implement visual designs and user interfaces\nWrite clean, maintainable, and testable code\nParticipate in code reviews and contribute to the team\'s best practices\nContinuously improve your skills and knowledge of web development technologies\n\nAbout you:\nCurrently enrolled in a computer science or related program\nStrong knowledge of HTML, CSS, and JavaScript\nFamiliarity with at least one modern JavaScript framework (e.g. React, Angular, Vue.js)\nDetail-oriented and able to write clean, maintainable, and testable code\nStrong problem-solving and analytical skills\nPassionate about web development and eager to learn new technologies\n\nAbout us:\nBright Tech Inc. is a growing technology company that specializes in web and mobile application development. We are a team of passionate developers, designers, and product managers who are dedicated to creating innovative and impactful software solutions. Our company culture is centered around teamwork, innovation, and continuous learning.\n\nQualifications:\nProficient in HTML, CSS, and JavaScript\nFamiliarity with at least one modern JavaScript framework (e.g. React, Angular, Vue.js)\nStrong problem-solving and analytical skills\nExcellent communication and collaboration skills\nCurrently enrolled in a computer science or related program'});
// getSql.insertData('form', {title: "Cyber Security Intern", description: "Company: CyberSafe\n\nAbout the Job: \nCyberSafe is looking for a Cyber Security Intern to help us develop and implement security solutions for our clients. In this role, you will work with our team of experienced security professionals to identify potential security threats, design and implement security protocols, and develop incident response plans. You will gain hands-on experience in the field of cyber security and learn about the latest technologies and trends in the industry.\n\nValue: \nAs a Cyber Security Intern at CyberSafe, you will have the opportunity to gain practical experience in the field of cyber security and develop valuable skills that will help you succeed in your career. You will work with a team of experienced professionals who are passionate about what they do and are committed to helping you grow and develop as a cyber security professional.\n\nResponsibilities:\nConduct vulnerability assessments and penetration testing\nDesign and implement security protocols to protect client data\nMonitor security systems and respond to security incidents\nDevelop and implement incident response plans\nStay up-to-date with the latest security threats and trends\n\nAbout you:\nPassionate about cyber security and eager to learn\nStrong analytical and problem-solving skills\nDetail-oriented and able to work independently\nExcellent communication and teamwork skills\nWillingness to take initiative and go above and beyond\n\nAbout us: \nCyberSafe is a leading provider of cyber security solutions for businesses of all sizes. We are committed to helping our clients protect their valuable data and assets from cyber threats. Our team of experienced professionals is dedicated to providing the highest level of service and support to our clients.\n\nQualifications:\nPursuing a degree in Computer Science, Cyber Security, or related field\nFamiliarity with security concepts and technologies, such as firewalls, intrusion detection/prevention systems, and SIEM solutions\nFamiliarity with programming languages such as Python, Java, or C++\nStrong problem-solving skills and attention to detail\nExcellent communication and teamwork skills\nExperience with Linux/Unix systems is a plus"});
// getSql.insertData('form', {title: 'Data Science Intern', description: `"Company: Data Insights Co.\
// \n\nAbout the Job: \
// \nAs a Data Science Intern, you will have the opportunity to work alongside our team of experienced data scientists to assist with various data analysis and modeling projects. You will be responsible for collecting and cleaning data, developing and testing statistical models, and creating data visualizations to communicate results.\
// \n\nValue:\
// \nThis internship provides a unique opportunity to gain hands-on experience in the field of data science and analytics. You will have the chance to work on real-world projects and build skills that will be valuable in your future career. In addition, you will receive mentorship and guidance from our experienced data science team.\
// \n\nResponsibilities:\
// \nCollect and clean data from various sources\
// \nDevelop and test statistical models using Python or R\
// \nCreate data visualizations to communicate results\
// \nAssist with the development of predictive models and machine learning algorithms\
// \nCollaborate with team members on data analysis projects\
// \n\nAbout you:\
// \nStrong analytical and problem-solving skills\
// \nFamiliarity with data analysis and statistical modeling techniques\
// \nProficiency in Python or R\
// \nExcellent communication and collaboration skills\
// \nSelf-motivated and eager to learn\
// \n\nAbout us:\
// \nData Insights Co. is a data science consulting firm that specializes in helping businesses make better decisions through data analysis and modeling. Our team of experienced data scientists has worked with clients in a variety of industries, from healthcare to finance to e-commerce.\
// \n\nQualifications:\
// \nCurrently enrolled in a Bachelor's or Master's degree program in a quantitative field such as Computer Science, Mathematics, or Statistics\
// \nFamiliarity with data analysis and statistical modeling techniques\
// \nProficiency in Python or R\
// \nStrong written and verbal communication skills\
// \nAbility to work independently and collaboratively with team members`});
// console.log("ADDED");
