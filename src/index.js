import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { aboutDiv } from "./about.js";

const content = document.querySelector('#content');

content.appendChild(homeDiv());

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', (e) => {
  content.replaceChild(homeDiv(), content.childNodes[0]);
});

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', (e) => {
  content.replaceChild(menuDiv(), content.childNodes[0]);
});

const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', (e) => {
  content.replaceChild(aboutDiv(), content.childNodes[0]);
});
