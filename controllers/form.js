const appIcon = document.querySelector('.app-icon');
const appSidebar = document.querySelector('.app-sidebar');
const appContent = document.querySelector('.app-content');

const desc = localStorage.getItem("formDescription");
const title = localStorage.getItem("formTitle");
const status = localStorage.getItem("formStatus");

appIcon.addEventListener('click', () => {
    appSidebar.classList.toggle('show');
    appContent.classList.toggle('app-sidebar-show');
  });

// Profile button
let profileButton =  document.querySelector(".profile-btn");
profileButton.addEventListener("click", function() {

  window.location.href = "profile.html";
  
});

function getTodaysDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function getSixMonthsFromToday() {
  const today = new Date();
  const sixMonthsFromToday = new Date(today.getFullYear(), today.getMonth() + 6, today.getDate());
  const year = sixMonthsFromToday.getFullYear();
  const month = String(sixMonthsFromToday.getMonth() + 1).padStart(2, '0'); // January is 0!
  const day = String(sixMonthsFromToday.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Get the local mode stored if it exists
let localMode = parseInt(localStorage.getItem("mode")) || 0;

// Toggle for light and dark themes
var modeSwitch = document.querySelector(".mode-switch");

window.onload = function() {

  const studentName = localStorage.getItem("f_name") + " " + localStorage.getItem("l_name")[0] + ".";
  document.getElementById("std_name").innerHTML = studentName;

  localStorage.setItem("mode", localMode.toString());

  if(localMode == 1) {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
  }
  console.log(localMode);
};

// Toggle for light themes listener
modeSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  modeSwitch.classList.toggle("active");
  localMode = localMode == 1 ? 0 : 1;
  localStorage.setItem("mode", localMode.toString());
});


// *********************************
//  Organize the Data for each form
// *********************************
const formTitle = document.getElementById('company-title');
const formAboutJob = document.getElementById('about-job');
const formValues = document.getElementById('value');
const formRespn = document.getElementById('responibilities');
const formAboutYou = document.getElementById('about-you');
const formAboutComp = document.getElementById('about-company');
const formQual = document.getElementById('qualifications');

// h2 element
formTitle.innerHTML = desc.substring(desc.indexOf("Company:") + 9, desc.indexOf("About the Job:"));

// p element
formAboutJob.innerHTML = desc.substring(desc.indexOf("About the Job:") + 15, desc.indexOf("Value:"));

// p element
formValues.innerHTML = desc.substring(desc.indexOf("Value:") + 7, desc.indexOf("Responsibilities:"));

// p element
formAboutComp.innerHTML = desc.substring(desc.indexOf("About us:") + 10, desc.indexOf("Qualifications:"));

// Create the list elements for each ul
function createListElements(section, text) {

    if(text == "" || text == "\n" || text == " ")
        return;
  
    else {
      if(text.indexOf(":") != -1)
        createListElements(section, text.substring(text.indexOf("\n") + 1));
      else if(text.indexOf("\n") == -1) {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(text));
        section.appendChild(item);
      }
      else {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(text.substring(0, text.indexOf("\n"))));
        section.appendChild(item);
        createListElements(section, text.substring(text.indexOf("\n") + 1));
      }
    }
}

// ul and li elements
createListElements(formRespn, desc.substring(desc.indexOf("Responsibilities:"), desc.indexOf("About you:")));

//  ul and li elements
createListElements(formAboutYou, desc.substring(desc.indexOf("About you:"), desc.indexOf("About us:")));

// ul and li elements 
createListElements(formQual, desc.substring(desc.indexOf("Qualifications:")));

// ***********************************
// Display form for user to fill out
// ***********************************

const applyButton = document.getElementById("apply-button");
const modalTitle = document.getElementById("modal-title");
const modal = document.getElementById("apply-modal");
const closeButton = document.querySelector(".close");
const form = document.getElementById("apply-form");
const appSubmitButton = document.getElementById("submit-application-button");

modalTitle.innerHTML = "Application for " + formTitle.innerHTML;

applyButton.addEventListener('click', () => {
  modal.style.display = "block";
});

closeButton.addEventListener('click', () => {
  modal.style.display = "none";
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  // You can add code here to handle the form submission
  // For example, you can send the form data to a server using AJAX or fetch API

  // internship title
  let title = localStorage.getItem("formTitle");

  // todays date
  let startDate = getTodaysDate();

  // six month date
  let endDate = getSixMonthsFromToday();

  // status = 0 -> pending
  let status = 0;

  // company id
  const compOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tableName: 'company', columns: 'company_id', condition: `name = '${desc.substring(desc.indexOf("Company:") + 9, desc.indexOf("About the Job:")).trim()}'`})
  };

  // console.log(desc.substring(desc.indexOf("Company:") + 9, desc.indexOf("About the Job:")));

  const currCompany = await fetch('http://localhost:3000', compOptions)
     .then(response => response.json())
     .then(data => {return data;})
     .catch(error => console.log(error));

  let companyId = currCompany[0].company_id;


  // student id
  const stdOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tableName: 'student', columns: 'student_id', condition: `email = '${localStorage.getItem("email")}'`})
  };

  const currStudent = await fetch('http://localhost:3000', stdOptions)
     .then(response => response.json())
     .then(data => {return data;})
     .catch(error => console.log(error));

  let studentId = currStudent[0].student_id;

  const internOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: `${title}`, start_date: `${startDate}`, end_date: `${endDate}`, status: 0, company_id: parseInt(companyId), student_id: parseInt(studentId) })
  };

  const createInternship = await fetch('http://localhost:3000/insertInternship', internOptions)
     .then(response => response.json())
     .then(data => {return data;})
     .catch(error => console.log(error));

  console.log(createInternship);
  let internshipId = createInternship[0].internship_id;

  // Get the form ID
  let fTitle = localStorage.getItem("formTitle");
  let fDesc = localStorage.getItem("formDescription");

  const formOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tableName: 'form', columns: 'form_id', condition: `title = '${fTitle}'` })
  };

  const getFormId = await fetch('http://localhost:3000', formOptions)
     .then(response => response.json())
     .then(data => {return data;})
     .catch(error => console.log(error));

  let formId = getFormId[0].form_id;

  const internSurveryOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date_submitted: startDate, text_data: document.getElementById("cover-letter").value, form_id: formId, internship_id: internshipId, student_id: studentId, tag_id: 2 })
  };

  // Go back to the main page
  window.location.href = "http://127.0.0.1:5501/views/index.html";

  await fetch('http://localhost:3000/insertInternSurvery', internSurveryOptions)
     .then(response => response.json())
     .then(data => {return data;})
     .catch(error => console.log(error));

  alert("Application Submitted!");
});

  