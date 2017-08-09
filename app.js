// links I may need:
// var url = "https://en.wikipedia.org/wiki/Special:Random"
// var url =  "https://www.mediawiki.org/wiki/API:Main_page"
var url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
// var url = "https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm"

function getIt(){
  console.log("getIt works");
  $.ajax({
     url: url,

     success: function(result){
       console.log("Below is RESULT: ");
       console.log(result);
         }})


}
