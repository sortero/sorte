$(".totalbarre, .topbarra").ready(setTimeout(loading, 900))

function loading(){
  $(".loading").css('display', 'none');

}

$(document).on("scroll",function(){
    if($(document).scrollTop()>10){
        $("#titolo").removeClass("titologrande").addClass("titolopiccolo");
        $("#menu").removeClass("menu").addClass("menu2");
        $("#topbarra").removeClass("topbarra").addClass("topbarra2")
    } else{
        $("#titolo").removeClass("titolopiccolo").addClass("titologrande");
        $("#menu").removeClass("menu2").addClass("menu")
        $("#topbarra").removeClass("topbarra2").addClass("topbarra")
    }
});
$('.mail').on('click',function(){
      window.location.href = "mailto:andrea.gasparro97@gmail.com";
   });


   ( function( $ ) {
       // Init Skrollr
       var s = skrollr.init({
           render: function(data) {
               //Debugging - Log the current scroll position.
               //console.log(data.curTop);
           }
       });
   } )( jQuery );
