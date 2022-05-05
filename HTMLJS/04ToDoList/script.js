
let tasks = [];
printTask();

document.getElementById("addTask").addEventListener("click", function (){
    addTask();
});

function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = {name: taskName, responsible: taskResponsible, isDone: false}
    tasks.push(task);
    printTask();
}

function printTask(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;
    tasks[index].isDone = isChecked;
    printTask();
}

function getHTMLTasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked = "";
        if (element.isDone == true){
            checked = "checked";
        }
        html += "<li><input onclick='markTask(this)' data-index='" + index + "' type='checkbox'" + checked +"/>" + element.name + " - " + element.responsible + " - " +  element.isDone + " " + "</li>"
        index++;
    })
    return html;
}