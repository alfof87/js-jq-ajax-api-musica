// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

function ajaxTest(){

$.ajax({
  url:"https://flynn.boolean.careers/exercises/api/array/music",
  method: "GET",
  success: function(data){
    var success = data["success"];
    var value = data["response"];
    // HANDLEBARS/////////////////////////////////////////
    // var template = $("#music-template").html();
    // var compiled = Handlebars.compile(template);
    // var target = $(".cd");
    //
    // var musicHTML = compiled(target);
    // target.append(musicHTML);
    //////////////////////////////////////////////////////
  },
  error: function(error){
    console.log("error", error);
  }


});


}





function init(){
ajaxTest();

}
$(document).ready(init);
