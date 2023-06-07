// -------------------------------------------------------------------------------------------------
// Helper functions
// -------------------------------------------------------------------------------------------------
function limitText(p, limit) {
    const text = p.textContent;
    if (text.length > limit) {
      p.textContent = text.slice(0, limit) + "...";
    }
  }

  function daysSinceDate(date) {
    // Convert the input date to milliseconds since midnight on Jan 1, 1970
    const inputTime = date.getTime();
    
    // Calculate the current time in milliseconds since midnight on Jan 1, 1970
    const currentTime = new Date().getTime();
    
    // Calculate the difference between the two times in milliseconds
    const timeDiff = currentTime - inputTime;
    
    // Convert the time difference to days
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    // Return the number of days that have passed
    return daysDiff;
  }

function getRandomColor() {
    // Define the range of brightness and saturation
    const brightnessRange = 40;
    const saturationRange = 50;

    // Generate random HSL values
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * saturationRange) + 50;
    const lightness = Math.floor(Math.random() * brightnessRange) + 50;

    // Convert HSL to hex format
    const hslToRgb = (h, s, l) => {
        let r, g, b;

        if (s === 0) {
        r = g = b = l; // achromatic
        } else {
        const hueToRgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    const [red, green, blue] = hslToRgb(hue / 360, saturation / 100, lightness / 100);
    const hex = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

    return hex;
}

function darkenHexColor(hex) {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Calculate new RGB values by reducing brightness by 20%
    const newR = Math.max(Math.round(r * 0.8), 0);
    const newG = Math.max(Math.round(g * 0.8), 0);
    const newB = Math.max(Math.round(b * 0.8), 0);

    // Convert new RGB values to hex
    const newHex = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1);

    return newHex;
}
  
// This is the main container (i.e. wrapper) for the individual internship boxes
function createInternshipBoxWrapper(color, darkColor, title, description) {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("project-box-wrapper");
  
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-box");
    projectDiv.style.backgroundColor = color;
  
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("project-box-header");
  
    const dateSpan = document.createElement("span");
    dateSpan.textContent = "December 10, 2020";
    dateSpan.style.color = "black";
    dateSpan.style.fontWeight = "bold";
  
    const moreWrapperDiv = document.createElement("div");
    moreWrapperDiv.classList.add("more-wrapper");
  
    const moreBtn = document.createElement("button");
    moreBtn.classList.add("project-btn-more");

    moreBtn.onclick = () => {

      /// Set the title and description of the clicked project in local storage
      localStorage.setItem("formTitle", title);
      localStorage.setItem("formDescription", description);
      localStorage.setItem("formStatus", "Pending ...");

      console.log(description);

      // Go to the form
      window.location.href = "http://127.0.0.1:5501/views/appliedForm.html";
    };
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.classList.add("feather", "feather-more-vertical");
  
    const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "12");
    circle1.setAttribute("cy", "12");
    circle1.setAttribute("r", "1");
  
    const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "12");
    circle2.setAttribute("cy", "5");
    circle2.setAttribute("r", "1");
  
    const circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "12");
    circle3.setAttribute("cy", "19");
    circle3.setAttribute("r", "1");
  
    svg.appendChild(circle1);
    svg.appendChild(circle2);
    svg.appendChild(circle3);
  
    moreBtn.appendChild(svg);
    moreWrapperDiv.appendChild(moreBtn);
  
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(moreWrapperDiv);
  
    projectDiv.appendChild(headerDiv);
  
    wrapperDiv.appendChild(projectDiv);
  
    return wrapperDiv;
  }

  // This handles the 'role' and 'current application status' attributes
function createInternshipHeader(title) {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("project-box-content-header");
  
    const mainTitleP = document.createElement("p");
    mainTitleP.classList.add("box-content-header");
    mainTitleP.textContent = title;
  
    const subTitleP = document.createElement("p");
    subTitleP.classList.add("box-content-subheader");
    subTitleP.textContent = "Pending ...";
  
    headerDiv.appendChild(mainTitleP);
    headerDiv.appendChild(subTitleP);
  
    return headerDiv;
}

  // This handles the company 'name' and 'description' 
function createInternshipDescription(description, color) {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("box-progress-wrapper");
  
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("project-box");
    boxDiv.style.backgroundColor = color;
  
    const headerDiv = createInternshipHeader("Web Designing");
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("box-progress-wrapper");
  
    const progressHeaderP = document.createElement("p");
    progressHeaderP.classList.add("box-progress-header");
    progressHeaderP.textContent = description.substring(description.indexOf(":") + 1, description.indexOf("\n"));
  
    const internshipDescP = document.createElement("p");
    internshipDescP.classList.add("box-internship-description");
    internshipDescP.textContent = description;
    limitText(internshipDescP, 50);
  
    progressDiv.appendChild(progressHeaderP);
    progressDiv.appendChild(internshipDescP);
  
    // boxDiv.appendChild(headerDiv);
    boxDiv.appendChild(progressDiv);
  
    wrapperDiv.appendChild(boxDiv);
  
    return wrapperDiv;
}


  
  // This is the footer of the box
function createInternshipFooter(color) {
    const footerDiv = document.createElement("div");
    footerDiv.className = "project-box-footer";
   
    const addParticipantBtn = document.createElement("button");
    addParticipantBtn.className = "add-participant";
    addParticipantBtn.style.color = color;
  
    const plusSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    plusSvg.setAttribute("width", "12");
    plusSvg.setAttribute("height", "12");
    plusSvg.setAttribute("viewBox", "0 0 24 24");
    plusSvg.setAttribute("fill", "none");
    plusSvg.setAttribute("stroke", "currentColor");
    plusSvg.setAttribute("stroke-width", "3");
    plusSvg.setAttribute("stroke-linecap", "round");
    plusSvg.setAttribute("stroke-linejoin", "round");
    plusSvg.className = "feather feather-plus";
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 5v14M5 12h14");
  
    plusSvg.appendChild(path);
  
    const month = 2; 
    const day = 2; 
    const year = 2023;
    let submissionDate = new Date(year, month, day);
    const dateLabel = daysSinceDate(submissionDate);

    const daysLeftDiv = document.createElement("div");
    daysLeftDiv.className = "days-left";
    daysLeftDiv.textContent = dateLabel + " days ago";
    daysLeftDiv.style.color = color;
  
    footerDiv.appendChild(daysLeftDiv);

    return footerDiv;
}
  
function createInternshipBox(title, description) {

    const color = getRandomColor();
    const darkColor = darkenHexColor(color);

    const appContent = document.querySelector('.project-boxes');

    const wrapper = createInternshipBoxWrapper(color, darkColor, title, description);
    const projectBox = wrapper.querySelector('.project-box');

    const header = createInternshipHeader(title, color);
    projectBox.appendChild(header);

    const desc = createInternshipDescription(description, color);
    projectBox.appendChild(desc);

    const footer = createInternshipFooter(darkColor);
    projectBox.appendChild(footer);

    appContent.appendChild(wrapper);
}
