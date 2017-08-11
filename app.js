var article = $('article');
var url = "https://en.wikipedia.org/w/api.php";

function getIt(){
  console.log("getIt works");
  var userInput = $("#searchInput").val();


  $.ajax({
    //  type: 'GET',
    //  dataType: 'json',
    //  async: false,
    //  contentType: 'application/json; charset=UTF-8;',
    url: url,
    data: { action: 'opensearch', search: userInput, format: 'json' },
    success: function(res){
      console.log("Below is RESULT: ");
      console.log(res);
      article.empty();
      for(var i = 0; i < 10; i++){
        article.append( '<div class="articles">' + (i+1) +
                       '<p id="titles">' + res[1][i] + '</p><br>' +
                       '<p id="descriptions">' + res[2][i] + '</p><br>' +
                       '<a href="' + res[3][i] + '">' + res[3][i] + '</a>'
                       + '</div><hr>'
                     );//append
      };//for
    }//success
  })//ajax

              // this also works
              //  $.get(url)
              //    .done(function(data) {
              //        console.log(data);
              //    })
              //    .fail(function(data) {
              //        console.log('Error: ' + data);
              //    });
}//getIt
function getRandom(){
  $.ajax({
    url: 'https://en.wikipedia.org/wiki/Special:Random',
    data: { action: 'opensearch', search: userInput, format: 'json' },

    success: function(res){
      url: url,
      console.log(res);

    }//success
  })
}//getRandom
