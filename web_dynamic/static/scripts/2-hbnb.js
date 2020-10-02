$(document).ready(function () {  
  $.get('http://localhost:5001/api/v1/status', function (data, status) {
    if (status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
