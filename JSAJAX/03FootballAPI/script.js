let teams = 'https://api.football-data.org/v2/competitions/2002/teams';

loadTeams();

function loadTeams() {
    fetch(teams, {
        method: "GET",
        headers: {
            "x-auth-token": "819babcd7902454f930c154272296d78"
        }
    })
        .then(response => response.json())
        .then(function (data) {
            let html = "";
            data.teams.forEach(element => {
                html += "<div class='container'>" +
                    "<table>" +
                    "<tr>" +
                    "<td><img class='icon' src='" + element.crestUrl + "'/></td>" +
                    "<td>" + element.name + "</td>" +
                    "<td>" + element.shortName + "</td>" +
                    "<td><link href='element.website'>" + element.website + "</td>" +
                    "<td>" + element.email + "</td>" +
                    "</tr>" +
                    "</table>"
            });
            document.getElementById("teams").innerHTML = html;
        });
}
