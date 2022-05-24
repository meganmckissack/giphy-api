import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GiphyService from './giphy-service';


function clearFields() {
  $('#gif').val("");
  $('.showErrors').text("");
}

$(document).ready(function() {
  $('#gifSearch').click(function() {
    let gif = $('#gif').val();
    clearFields();
    let promise = GiphyService.getGif(gif);
    promise.then(function(response) {
      const responseData = JSON.parse(response);
      $('.showGifs').prepend(`<img src=${responseData.data[0].url}>`);
      // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});