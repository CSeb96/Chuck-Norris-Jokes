
$(document).ready(function(){
    $( "#clc" ).click(function() {
      $.getJSON("https://api.chucknorris.io/jokes/random", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    }) } );
