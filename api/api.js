const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const {addStudent} = require('./getSql')
const app = express();
const getSql = require('./getSql.js');
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxx',
  port: 3306,
  database: 'intern_db'
});

// Route for handling the POST request
app.post('/', async (req, res) => {

  const { tableName, columns, condition } = req.body;

  res.send(await getSql.selectData(tableName, columns, condition));
  // // Call the selectData function with the provided parameters
  // const sql = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;
  // connection.query(sql, (err, result) => {
  //   if (err) throw err;

  //   res.json(result); // Return the result as JSON
  // });
});

app.post('/deleteData', (req, res) => {

  // Delete the data!
  getSql.deleteData(req.body.tableName);

});

app.post('/getCompanyID', async (req, res) => {
  const { companyName } = req.body;

  res.send(await getSql.selectData('company', 'company_id', `name = '${companyName}`));
});

app.post('/insertstudent', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  await addStudent(firstName, lastName, email)
    .then(() => {
      res.status(201).send('Student added successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error adding student');
    });
});

app.post('/insertInternship', async (req, res) => {
  // Set the internship values
  getSql.insertData('internship', req.body);
  console.log("Added internship");

  // Send the internship id of the internship that was added
  const result = await getSql.selectData('internship', 'internship_id', `title = '${req.body.title}' and company_id = ${req.body.company_id} and student_id = ${req.body.student_id}`);
  res.send(result);
});

app.post('/insertInternSurvery', async (req, res) => {
  getSql.insertData('internship_survey', req.body);
  console.log("Added");
})

app.post('/getInternships', async (req, res) => {
  const { std_id } = req.body;

  res.send(await getSql.getAppliedInternships(std_id));
});

app.post('/insertForm', async (req, res) => {

  try {
    getSql.insertData('form', req.body);
    res.status(201).send('Success in adding form');
  }
  catch(e) {
    res.status(500).send('Error adding form');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
