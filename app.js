$(function(){
  $('#submit').click(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyDE-aLVr8MPScGzInbbYnWlGFBpagBC7Qc',
    q: searchTerm,
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    $("#search-results").append('<a href="' + "https://www.youtube.com/watch?v=" + value.id.videoId + '/">' + '<img src="' + value.snippet.thumbnails.high.url + '"/>' + "</a>" );
    console.log('<a href="' + "https://www.youtube.com/watch?v=" + value.id.videoId + '/">' + '<img src="' + value.snippet.thumbnails.high.url + '"/>' + "</a>")
  });
}