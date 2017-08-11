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
      article.append( '<div class="articles">' +
                     '<p id="titles">' + res[1][rand] + '</p><br>' +
                     '<p id="descriptions">' + res[2][rand] + '</p><br>' +
                     '<a href="' + res[3][rand] + '">' + res[3][rand] + '</a>'
                     + '</div><hr>'
                   );//append
    }//success
  })//ajax
}//getRandom
