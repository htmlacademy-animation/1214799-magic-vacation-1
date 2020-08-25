// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AccentTypographyBuild from './modules/literal-animate';


// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const prizes = document.getElementById("prizes");
const fon = document.getElementById("fon");
const story = document.getElementById("story-link");
let access = false;

function reset() {
	fon.classList.remove("active");
}

function start() {
	fon.classList.add("active");
}

story.onclick = function() {
	access = true;
} 

prizes.onclick = function() {
	if(access) {
		setTimeout(() => start(), 1);
		setTimeout(() => reset(), 1500);
		access = false;
	}
}

const animationTopScreenTextLine = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`);
setTimeout(()=>{
  animationTopScreenTextLine.runAnimation();
}, 500);

const animationSubScreenTextLine = new AccentTypographyBuild(`.intro__date`, 500, `active`, `transform`);
setTimeout(()=>{
  animationSubScreenTextLine.runAnimation();
}, 1500);

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

var myobj = document.getElementById("second-prize");
myobj.remove();

var DOM_img = document.createElement("img");
DOM_img.src = "img/secondary-award-from.svg?rand" + Date.now();
var DOM_a = document.getElementById("second-prize-cover");
DOM_a.appendChild(DOM_img);
