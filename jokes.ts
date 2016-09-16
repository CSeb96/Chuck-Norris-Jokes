//<reference path="myjsfile.d.ts"/>

var xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.chucknorris.io/jokes/random", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        alert(response.value);
    }
}