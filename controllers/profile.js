const appIcon = document.querySelector('.app-icon');
const appSidebar = document.querySelector('.app-sidebar');
const appContent = document.querySelector('.app-content');
const appNameImg = document.querySelector('.app-name');


appIcon.addEventListener('click', () => {
  appSidebar.classList.toggle('show');
  appContent.classList.toggle('app-sidebar-show');
});

// Profile button
let profileButton =  document.querySelector(".profile-btn");
profileButton.addEventListener("click", function() {

  window.location.href = "profile.html";
  
});

  
  // Get the local mode stored if it exists
  let localMode = parseInt(localStorage.getItem("mode")) || 0;

  // Toggle for light and dark themes
  var modeSwitch = document.querySelector(".mode-switch");


  function toggleImage() {
    const img = document.querySelector('.app-name');
    const imgSrc = img.getAttribute('src');
    
    if (localMode == 0) {
      img.setAttribute('src', '../components/assets/light.png');
    } else {
      img.setAttribute('src', '../components/assets/dark.png');
    }
  }

  window.onload = function() {

    toggleImage();

    const studentName = localStorage.getItem("f_name") + " " + localStorage.getItem("l_name")[0] + ".";
    document.getElementById("std_name").innerHTML = studentName;

    localStorage.setItem("mode", localMode.toString());

    if(localMode == 1) {
      document.documentElement.classList.toggle("dark");
      modeSwitch.classList.toggle("active");
    }
  };

  // Toggle for light themes listener
  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
    localMode = localMode == 1 ? 0 : 1;
    localStorage.setItem("mode", localMode.toString());

    toggleImage();
  });
