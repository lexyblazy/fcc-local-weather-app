

var coords = [];


function getWeather(){
    var url = `https://api.darksky.net/forecast/f9034888c6b1a0c90fec3c859eacc76a/${coords[0]},${coords[1]}?callback=?`;
    $.getJSON(url,function(result){
        console.log(result);
        $('#location').text(result.timezone);
        $('#summary').text(result.currently.summary);
        $('#temp').text(result.currently.temperature + 'F'); 
        
    })
}

function getCoords(){
    navigator.geolocation.getCurrentPosition(function(position){
        
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        coords.push(lat,lng);
        getWeather();
       
    })
}

getCoords();


// url: `https://api.darksky.net/forecast/f9034888c6b1a0c90fec3c859eacc76a/${lat},${lng}`
