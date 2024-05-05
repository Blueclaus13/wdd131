const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
date.innerHTML= `Last modification ${today.toLocaleString('en-US', { timeZoneName: 'short' })}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const title = document.querySelector("#title");
const links = document.querySelectorAll(".links a");
function handdleEvent(event){
    event.preventDefault();
    title.textContent = `${event.currentTarget.innerHTML}`;
};

links.forEach((link)=>{
    link.addEventListener("click", handdleEvent)
});