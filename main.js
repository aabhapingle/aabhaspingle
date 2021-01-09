const typedtextspan = document.querySelector(".typed-text");
const cursorspan = document.querySelector(".cursor");

const textarr = ["Machine Learning Enthusiast", "Web Developer", "Bharatanatyam Dancer"];
const typingdelay = 200;
const erasingdelay = 100;
const newTextDelay = 2000;
let textarrindx  = 0;
let charindx = 0;

function type(){
	if(charindx < textarr[textarrindx].length){
		if (!cursorspan.classList.contains("typing")) {cursorspan.classList.add("typing")};
		typedtextspan.textContent += textarr[textarrindx].charAt(charindx);
		charindx++;
		setTimeout(type, typingdelay); 
		// this is a reference to the function and not a direct call

	}
	else{
		// erase
		cursorspan.classList.remove("typing");
		setTimeout(erase, newTextDelay); 
	}
}

function erase(){
	if(charindx > 0){
		if (!cursorspan.classList.contains("typing")) {cursorspan.classList.add("typing")};
		typedtextspan.textContent = textarr[textarrindx].substring(0,charindx-1);
		charindx--;
		setTimeout(erase, erasingdelay);
	}
	else{
		cursorspan.classList.remove("typing");
		textarrindx++;
		if(textarrindx >= textarr.length){
			textarrindx = 0;
		}
		setTimeout(type, typingdelay);
	}
}

// wait for browser to load all the images and stuff
document.addEventListener("DOMContentLoaded", function(){
	setTimeout(type, 2500);
})