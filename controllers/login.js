// Signup and Login buttons
const signupSlideButton = document.getElementById('signup-button'),
    loginSlideButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms'),
    loginButton = document.getElementById('form_login-btn'),
    signupButton = document.getElementById('form_signUp-btn');

/*
 * Add event listener to the "Sign Up" button
 */
signupSlideButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/*
 * Add event listener to the "Login" button
 */
loginSlideButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)

const requestOptions = (emailCondition) => {
  return ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tableName: 'student', columns: '*', condition: emailCondition })
})};

const studentOptions = (fn, ln, email) => {
  return ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName: fn, lastName: ln, email: email})
})};


/*
* Add event listener to the "Form Submission Login" button
*/
loginButton.addEventListener('click', async (event) => {

  // Prevent page from reloading cause bad :(
  event.preventDefault();

  const emailCondition = 'email = \'' + document.getElementById('login_email').value + '\'';

  const sqlData = await fetch('http://localhost:3000', requestOptions(emailCondition))
      .then(response => response.json())
      .then(data => {return data;})
      .catch(error => console.log(error));

    if(sqlData.length == 1) {
      localStorage.setItem("f_name", sqlData[0]['first_name']);
      localStorage.setItem("l_name", sqlData[0]['last_name']);
      localStorage.setItem("email", sqlData[0]['email']);

      window.location.href = 'index.html';
    }
    else
      alert('Please enter a valid email.');

});

/*
* Listener For Sign Up Button
*/
signupButton.addEventListener('click', async () => {

  const fn = document.getElementById('first-name').value;
  const ln = document.getElementById('last-name').value;
  const email = document.getElementById('signup-email').value;

  const sqlDataSet = await fetch('http://localhost:3000/insertstudent', studentOptions(fn, ln, email))
      .then(response => response.json())
      .then(data => {return data;})
      .catch(error => console.log(error));

    localStorage.setItem("f_name", fn);
    localStorage.setItem("l_name", ln);
    localStorage.setItem("email", email);

    // Redirect to index.html
    window.location.href = 'index.html';

});

