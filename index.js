const textEl = document.getElementById("text");
const careers = ["Youtuber", "Instructor", "Freelancer", "Web Developer"];
let careerIndex = 0;
let characterIndex = 0;
auto();

function auto () {
    characterIndex++;
   
    textEl.innerHTML = `I am ${careers[careerIndex].slice(0,1) == "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}`;
    if (characterIndex === careers[careerIndex].length) {
        characterIndex = 0;
        careerIndex++;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(auto,400);
}