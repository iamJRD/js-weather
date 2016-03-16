var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
    {
      $('.showFeature').text("The wind in " + city + " is " + response.wind.speed);
      $('.showDescription').text("Here are the coordinates " + response.coord.lat);
    });
  });
});
