function callerJokes(): void{
   $.getJSON('http://api.icndb.com/jokes/random?exclude=[explicit]', function(json_data){
    alert(JSON.stringify(json_data.value.joke));
   
});
}

