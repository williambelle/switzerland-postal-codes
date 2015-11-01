$(function(){
  $('#code').focus();
  $.getJSON('dist/postal-codes.json', function(postalCodes) {
    $('#code').keyup(function(){
      var value = $(this).val();
      if (value.length === 4){
        $('#city').val(postalCodes[value]);
      } else {
        $('#city').val('');
      }
    });
  });
});
