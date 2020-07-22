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
    var template = $("#music-template").html();
    var compiled = Handlebars.compile(template);
    var target = $(".cds-container");
    console.log(value);
    for (var i = 0; i < value.length; i++) {
      // value[i]
      console.log(value[i]);
      var obj = compiled(value[i]);
    console.log(obj);
      target.append(obj);
    }
    //////////////////////////////////////////////////////
  },
  error: function(error){
    console.log("error", error);
  }

});
}
////////////BONUS////////////////////////
function selectMusicType(){
  var pop = {"genre": "Pop"};
  var rock = {"genre": "Rock"};
  var metal = {"genre": "Metal"};
  var jazz = {"genre": "Jazz"};
  // console.log(pop);
  $("#pop").click(function(){
    rock.addClass("hide");
    metal.addClass("hide");
    jazz.addClass("hide");
  });
  $("#rock").click(function(){
    pop.addClass("hide");
    metal.addClass("hide");
    jazz.addClass("hide");
  });
  $("#metal").click(function(){
    pop.addClass("hide");
    rock.addClass("hide");
    jazz.addClass("hide");
  });
  $("#jazz").click(function(){
    pop.addClass("hide");
    metal.addClass("hide");
    metal.addClass("hide");
  });
}
//////////////////////////////////////////////////////




function init(){
ajaxTest();
selectMusicType();
}
$(document).ready(init);
