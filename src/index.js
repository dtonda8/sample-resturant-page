import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const contentDiv = document.querySelector("#content");
const btnsDiv = document.createElement('div');
const textDiv = document.createElement('div');
const homeDiv = loadHome();
const menuDiv = loadMenu();
const aboutDiv = loadAbout();
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const aboutBtn = document.createElement('button');

homeBtn.addEventListener('click', updatePage);
menuBtn.addEventListener('click', updatePage);
aboutBtn.addEventListener('click', updatePage);

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
aboutBtn.textContent = "About";

homeBtn.id = "home";
menuBtn.id = "menu";
aboutBtn.id = "about";

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
aboutBtn.textContent = "About";

homeBtn.classList.add('unhidden');
homeBtn.classList.add('hidden');
homeBtn.classList.add('hidden');

btnsDiv.appendChild(homeBtn);
btnsDiv.appendChild(menuBtn);
btnsDiv.appendChild(aboutBtn);

btnsDiv.style.textAlign = 'center'
btnsDiv.style.padding = '10px'

textDiv.appendChild(homeDiv);
textDiv.appendChild(menuDiv);
textDiv.appendChild(aboutDiv);

textDiv.style.padding = "10px"

contentDiv.appendChild(btnsDiv);
contentDiv.appendChild(textDiv);


function updatePage(e) {
    let divID = e.target.id + '-div';
    let divOfInterest = document.getElementById(divID);

    if (divOfInterest.classList[0] === 'hidden') {
        let unhiddenDiv = document.querySelector("div.unhidden");
        unhiddenDiv.classList.remove('unhidden');
        unhiddenDiv.classList.add('hidden');

        divOfInterest.classList.remove('hidden');
        divOfInterest.classList.add('unhidden');

        let unhiddenBtn = document.querySelector("button.unhidden");
        unhiddenBtn.classList.add('hidden');
        unhiddenBtn.classList.remove('unhidden');

        e.target.classList.remove('hidden');
        e.target.classList.add('unhidden');
    }


}