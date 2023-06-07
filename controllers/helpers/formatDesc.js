
let desc =  "Company: Virtual Solutions Inc.\n\nAbout the Job:\nVirtual Solutions Inc. is seeking a Software Engineering Intern to work alongside our team of experienced developers on various projects. This position offers an opportunity to learn new skills, gain hands-on experience in software development, and contribute to real-world projects.\n\nValue:\nAs a Software Engineering Intern at Virtual Solutions Inc., you will gain valuable experience and knowledge in software development while also building your portfolio. You will also have the opportunity to work with a team of experienced developers who will guide and mentor you throughout your internship.\n\nResponsibilities:\nCollaborate with team members on software development projects\nWrite clean, efficient, and maintainable code\nParticipate in code reviews and contribute to the team's codebase\nTest and debug software to ensure high quality and functionality\nParticipate in team meetings and contribute to discussions\n\nAbout you:\nCurrently pursuing a degree in Computer Science or a related field\nPassionate about software development and technology\nStrong problem-solving and critical thinking skills\nAbility to work collaboratively in a team environment\nGood communication and interpersonal skills\n\nAbout us:\nVirtual Solutions Inc. is a software development company that provides innovative solutions to businesses across various industries. Our team is comprised of experienced developers who are passionate about technology and committed to delivering quality software. We believe in fostering a collaborative and supportive work environment where everyone has the opportunity to learn and grow.\n\nQualifications:\nFamiliarity with programming languages such as Java, Python, or JavaScript\nKnowledge of software development principles and practices\nExperience with version control systems such as Git\nAbility to work full-time during the summer or part-time during the school year"; 
const formTitle = document.getElementsByClassName('company-title');
const formAboutJob = document.getElementsByClassName('about-job');
const formValues = document.getElementsByClassName('value');
const formRespn = document.getElementsByClassName('responibilities');
const formAboutYou = document.getElementsByClassName('about-you');
const formAboutComp = document.getElementsByClassName('about-company');
const formQual = document.getElementsByClassName('qualifications');

// h2 element
formTitle.innerHTML = desc.substring(desc.indexOf("Company:") + 9, desc.indexOf("About the Job:"));

// p element
formAboutJob.innerHTML = desc.substring(desc.indexOf("About the Job:"), desc.indexOf("Value:"));

// p element
formValues.innerHTML = desc.substring(desc.indexOf("Value:"), desc.indexOf("Responsibilities:"));

// p element
formAboutComp.innerHTML = desc.substring(desc.indexOf("About us:"), desc.indexOf("Qualifications:"));

// ****************************************************************************************
// 
// ****************************************************************************************


function createListElements(section, text) {

    if(text == "")
        return;

    const item = document.createElement("li");
    item.appendChild(document.createTextNode(text.substring(0, text.indexOf("\n"))));
    section.appendChild(item);
    console.log(text);
    createListElements(section, text.substring(text.indexOf("\n") + 1));
}


// ul and li elements
createListElements(formRespn, desc.substring(desc.indexOf("Responsibilities:"), desc.indexOf("About you:")));

//  ul and li elements
createListElement(formAboutComp, desc.substring(desc.indexOf("About you:"), desc.indexOf("About us:")));

// ul and li elements 
createListElements(formQual, desc.substring(desc.indexOf("Qualifications:")));

