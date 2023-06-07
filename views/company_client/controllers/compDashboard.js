const compName = document.getElementById("company");
const role = document.getElementById("role");
const aboutJob = document.getElementById("about-job");
const value = document.getElementById("value");
const responsibilities = document.getElementById("responsibilities");
const aboutYou = document.getElementById("about-you");
const aboutUs = document.getElementById("about-us");
const qualifications = document.getElementById("qualifications");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async () => {

    let desc = 
    "Company: " 
    + compName.value + "\n" +
    "About the Job: " +
    aboutJob.value +
    "Value: " +
    value.value +
    "Responsibilities: " +
    responsibilities.value +
    "About you: " +
    aboutYou.value +
    "About us: " +
    aboutUs.value +
    "Qualifications: " +
    qualifications.value;

    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: `${role.value}`, description: desc })
      };


    await fetch('http://localhost:3000/insertForm', requestOptions)
      .then(response => response.json())
      .then(data => {return data;})
      .catch(error => console.log(error));


    alert(desc);

});

