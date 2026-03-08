function addTask()
{

let input = document.getElementById("taskInput")
let taskText = input.value

if(taskText === "")
{
alert("Please enter a task")
return
}

createTask(taskText)

saveTasks()

input.value=""

updateCount()

}

function createTask(taskText)
{

let li = document.createElement("li")

let task = document.createElement("span")
task.textContent = taskText

task.onclick = function()
{
task.classList.toggle("completed")
saveTasks()
}

let deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete"
deleteBtn.className = "delete-btn"

deleteBtn.onclick = function()
{
li.remove()
saveTasks()
updateCount()
}

li.appendChild(task)
li.appendChild(deleteBtn)

document.getElementById("taskList").appendChild(li)

}

function saveTasks()
{

let tasks=[]

document.querySelectorAll("#taskList li span").forEach(task=>{
  tasks.push(task.textContent)
})

localStorage.setItem("tasks",JSON.stringify(tasks))

}
let taskText = input.value.trim()
function loadTasks(){

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(task=>{
createTask(task)
})

updateCount()

}

function updateCount(){

let count=document.querySelectorAll("#taskList li").length

document.getElementById("taskCount").textContent="Tasks: "+count

}
loadTasks()
