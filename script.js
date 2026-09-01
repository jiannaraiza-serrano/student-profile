const profileContainer = document.getElementById("profile-container");

const card = document.createElement('div');
const avatar = document.createElement('img');
const name = document.createElement('h2');
const bio = document.createElement('p');

card.classList.add('profile-card');

avatar.src = 'avatar.jpg';
avatar.classList.add('avatar');

name.textContent = 'Jianna Raiza Serrano';
name.classList.add('student-name');

bio.textContent = 'Hey there! (｡･∀･)ﾉﾞJi at your service! A 2nd-year BSIS student at La Verdad Christian College who loves sweets, music, and art ✧.';
bio.classList.add('student-bio');

card.appendChild(avatar);
card.appendChild(name);
card.appendChild(bio);

profileContainer.appendChild(card);

// === Activity 2: Interactive Registration Card ===
const nameInput = document.querySelector("#nameInput");
const welcomeMessage = document.querySelector("#welcomeMessage");

// Part 1: Live Name Preview
nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
        welcomeMessage.textContent = "Welcome!";
    } else {
        welcomeMessage.textContent = "Welcome, " + nameInput.value + "!";
    }
    
});

// Part 2: Handle Form Submission
const studentForm = document.querySelector("#studentForm");
const courseInput = document.querySelector("#courseInput");
const registrationMessage = document.querySelector("#registrationMessage");

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = nameInput.value;
    const studentCourse = courseInput.value;

    registrationMessage.textContent = studentName + " has been registered for " + studentCourse + "!";
});

// Part 3: Toggle the Theme
const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Part 4: Keyboard Challenge
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        welcomeMessage.textContent = "Welcome!";
    }
})


/* Reflection Questions:
1. Event Prevention
Why is event.preventDefault() necessary when handling form submissions?
- The event.preventDefault() is necessary when handling form submissions because when I first tested it,
the page would refresh every time I clicked Register, which made the message I wanted to show disappear right away.
Once I added preventDefault, the result finally stayed on the screen the way it was supposed to.

2. State Toggling
How does classList.toggle() simplify dynamic theme switching?
- classList.toggle() simplifies dynamic theme switching because instead of writing an if-else to check whether the
dark mode was already on or off, it handles that in a single line. It automatically adds or removes the class depending
on whether it's already there, which made my code shorter and simpler.

3. Input vs. Keydown
What is the practical difference between the input and keydown event listeners?
- The practical difference between the input and keydown event listeners is that input follows that actual text in the box
in real time as I type, while keydown is meant for detecting a specific key press. That's why I used input for the live preview and keydown specifically
for the Escape key challenge. 
*/