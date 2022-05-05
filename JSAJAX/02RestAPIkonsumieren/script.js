function registerEvents(){
    document.getElementById("loadAufgaben").addEventListener("click", function(){
        loadAufgaben();
    })

    document.getElementById("loadUser").addEventListener("click", function(){
        loadUser();
    })
}

function loadAufgaben(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(todo => {
                html += "<li>" + todo.title + "</li>"
            })

            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(user => {
                html += "<li>" + user.name + "</li>"
            })

            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

registerEvents();