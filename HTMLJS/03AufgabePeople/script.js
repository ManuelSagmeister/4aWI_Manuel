var Person = [
    {
        "firstname": "Manuel",
        "lastname": "Sagmeister",
        "image": "https://assets.orf.at/mims/2022/18/14/crops/w=640,h=256,q=70,r=2/1328138_opener_475614_fus_cl_hf_hin_liverpool_villarreal_mane_afp.jpg?s=67e3a890a28d33ca568d4e18bfafafcf639749e9",
    },
    {
        "firstname": "Lukas",
        "lastname": "Schneider",
        "image": "https://assets.orf.at/mims/2022/18/14/crops/w=640,h=256,q=70,r=2/1328138_opener_475614_fus_cl_hf_hin_liverpool_villarreal_mane_afp.jpg?s=67e3a890a28d33ca568d4e18bfafafcf639749e9",
    },
    {
        "firstname": "Florian",
        "lastname": "Breuker",
        "image": "https://assets.orf.at/mims/2022/18/14/crops/w=640,h=256,q=70,r=2/1328138_opener_475614_fus_cl_hf_hin_liverpool_villarreal_mane_afp.jpg?s=67e3a890a28d33ca568d4e18bfafafcf639749e9",
    }
]


var html = "";

for(i = 0; i < Person.length; i++){

    html += "<div class ='first'>";
    html += "<ul>";
    html += "<li>" + Person[i].firstname + "</li>";
    html += "<li>" + Person[i].lastname + "</li>";
    html += "<li>" + "<img src=" + Person[i].image + "></img>" + "</li>";
    html += "</ul>";
    html += "</div>";

}

document.getElementById("container").innerHTML = html;