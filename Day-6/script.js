//querySelector select only first node from dom
//querySelectorAll select all node from dom
const paragraph = document.querySelector("p");//accessing p tag using dom in paragraph variable

let container = document.querySelector("#container");//accessing div element by id

const button = document.querySelector("#btn")//accesing button element

paragraph.textContent = "Text content has been now access by javascript dom and updating content using textcontent property";

container.style.backgroundColor = "yellow"//adding background color to div element using style property in javascript

button.addEventListener("click",() =>{
    let p = document.createElement("p");
    p.innerText = "new text"
    container.appendChild(p);
})



