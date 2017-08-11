var article = $('article');
var url = "https://en.wikipedia.org/w/api.php";
var userInput = '';
var rand = 1;
var resultsLimit = 22;


function getIt(){
  console.log("getIt works");
  userInput = $("#searchInput").val();
  $.ajax({
    //  type: 'GET',
    //  dataType: 'json',
    // //  async: false,
    //  contentType: 'application/json; charset=UTF-8;',
    url: url,
    data: { action: 'opensearch', search: userInput, format: 'json', limit: resultsLimit },
    success: function(res){
      console.log("Below is RESULT: ");
      console.log(res);
      article.empty();
      for(var i = 0; i < resultsLimit; i++){
        article.append( '<div class="articles">' + (i+1) + ": " +
                       '<h4 id="titles"><a href="' + res[3][i] + '">' + res[1][i] + '</a></h4><br>' +
                       '<p id="descriptions"><a href="' + res[3][i] + '">' + res[2][i] + '</a></p>' +
                       '</div><hr>'
                     );//append
      };//for
    }//success
  })//ajax
              //  $.get(url)
              //    .done(function(data) {} )
              //    .fail(function(data) {} );
}//getIt

// gets one random article using the users word
function getRandom(){
  rand = Math.floor(Math.random() * resultsLimit);
  userInput = $("#searchInput").val();
  $.ajax({
    url: url,
    data: { action: 'opensearch', search: userInput, format: 'json', limit: resultsLimit },
    success: function(res){

      console.log("Below is Random: ");
      console.log(res);
      article.empty();
      article.append('<div class="articles">' +
                     '<h4 id="titles"><a href="' + res[3][rand] + '">' + res[1][rand] + '</a></h4><br>' +
                     '<p id="descriptions"><a href="' + res[3][rand] + '">' + res[2][rand] + '</a></p>' +
                     '</div><hr>'
                   );//append







    }//success
  })//ajax
}//getRandom
