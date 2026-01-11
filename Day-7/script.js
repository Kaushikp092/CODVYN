const container = document.querySelector(".container"); //accessing container

const input = document.querySelector("#taskInput"); //accessing input to send text in ta

const taskList = document.querySelector(".taskList"); //accessing tasklist

const button = document.querySelector(".addBtn"); //accessing add task button

button.addEventListener("click", () => {
   const taskText = input.value.trim(); //remove extra white space

   if (taskText === "") return; //it will check that if input is empty or not.If the input is empty then nothing will be passed to tasklist container

   const li = document.createElement("li"); //it will create new li tag in tasklist container
   const span = document.createElement("span"); //it will create new span tag
   span.textContent = taskText; // passing input value will be store in span and pass to tasktext
   
   const delBtn = document.createElement("button"); //creates new delete button
   delBtn.textContent = "Delete"; //setting inner text of delbtn
   delBtn.onclick = () => li.remove(); //remove from li list from tasklist
   
   li.appendChild(span); //append new text in each li
   li.appendChild(delBtn); //append delete btn in each li

   document.getElementById("taskList").appendChild(li); //now appending li in tasklist

   input.value = " "; //clear input value after appending new task
});
