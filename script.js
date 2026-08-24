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