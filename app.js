$(function() {
  $.get('file.json', function(data) {
    var str='';
    $.each(data, function(i, v) {
      str += '<div class="media"><h4>' + v.title + '</h4><img src="img/' + v.url + '"></img>';
    });
    $('#poster').html(str);
  });
});