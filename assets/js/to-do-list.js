var listaTask = [];
var i = 0;


window.addEventListener('load', funzioneStorage);
function funzioneStorage() {
    if (localStorage.getItem('tasks')) {
        localStorage.getItem('tasks').split(',');
    };
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('tasks', listaTask);
}

function creaArray() {
    listaTask.push(document.querySelector("#task").value);
    aggiungiTask();
}

function aggiungiTask() {
    var list = "";
    for (i=0; i < listaTask.length; i++){
    list += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + listaTask[i] + "<span onclick='removeTask("+ i +")' class='remove_btn badge bg-danger rounded-pill pointer'>X</span>" + "</li>";
    };
    document.querySelector("#lista_task").innerHTML = list;
    clearForm();
    saveStorage();
}

function clearForm(){
    var form = document.querySelector('#myForm');
    form.reset();
}

function removeTask(id){
    listaTask.splice(id, 1);
    funzioneStorage();
    aggiungiTask();
    alert ("Task rimosso!")
}