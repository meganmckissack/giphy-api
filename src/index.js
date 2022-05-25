import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-service';


function clearFields() {
  $('#gif').val("");
  $('.showErrors').text("");
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let gif = $('#gif').val();
    clearFields();
    let promise = GiphyService.getGif(gif);
    promise.then(function(response) {
      const responseData = JSON.parse(response);
      for  (let i = 0; i < 10; i++) {
        $('.showGifs').append("<img src=" + `${responseData.data[i].images.downsized.url}` + " />");
      } 
      
      // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});