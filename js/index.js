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
  skill.innerHTML = `${skills[i]}`;
  skillsList.appendChild(skill);
}
