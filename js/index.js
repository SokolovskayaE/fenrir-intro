// Adding Name, year and copyright in the Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Made with &hearts; by Elena Sokolovskaya ${thisYear}`;
footer.appendChild(copyright);

// Adding skills
const skills = ["JavaScript", "HTML", "CSS", "GIT"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
// Form
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);
  messageForm.reset();

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote: <span>${usersMessage} </span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});
// AJAX
// New XMLHttpRequest object
let githubRequest = new XMLHttpRequest();
// Open a request
githubRequest.open("GET", "https://api.github.com/users/SokolovskayaE/repos");
// Send the request
githubRequest.send();

// Add a "load" event listener
githubRequest.addEventListener("load", (event) => {
  if (githubRequest.status === 200) {
    // Successful HTTP request
    let repositories = JSON.parse(githubRequest.response); // Parse the response and store it in a variable named repositories
    console.log(repositories);

    // Select the #projects section by id and store it in a variable named projectSection
    let projectSection = document.getElementById("projects");
    // Query the projectSection (instead of the entire document) to find the <ul> element and store it in a variable named projectList
    let projectList = projectSection.querySelector("ul");
    // For loop to iterate over your repositories Array, starting at index 0
    //for (let i = 0; i < repositories.length; i++) {
    for (let repo of repositories) {
      // Create a new list item (li) element and store it in a variable named project
      let project = document.createElement("li");
      // Set the inner text of your project variable to the current Array element's name property
      //project.innerText = repositories[i].name;
      project.innerText = repo.name;
      // Transform your repository names into <a> tags that link to GitHub (hint: html_url property)
      //project.innerHTML = `<a class="link link--no-decor" href="https://github.com//SokolovskayaE/fenrir-intro ">Intro to programming FENRIR</a>`;
      // append the project element to the projectList element
      projectList.appendChild(project);
    }
  }
});
