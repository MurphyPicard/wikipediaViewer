// links I may need:
// https://en.wikipedia.org/wiki/Special:Random
// https://www.mediawiki.org/wiki/API:Main_page
// https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm

function getIt(){
  console.log("it works");
  $.ajax({
    
     url: "something",

     success: function(result){
       console.log(result);
         }})


}
