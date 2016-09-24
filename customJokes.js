function jokesCust() {
    var fName = ($('#fn').val());
    var lName = ($('#ln').val());
    $.getJSON('http://api.icndb.com/jokes/random/?firstName= ' + fName + '&lastName=+' + lName + '', function (json_data) {
        alert(JSON.stringify(json_data.value.joke));
    });
}
