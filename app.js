$(function() {
  $.get('file.json', function(data) {
    var str='';
    $.each(data, function(i, v) {
      str += '<div class="img-box"><h4>' + v.title + '</h4><img src="img/' + v.url + '"></img>';
    });
    $('#container').html(str);
  });
});