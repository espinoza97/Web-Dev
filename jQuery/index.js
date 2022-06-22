// $("h1").css("color","green");
// $("h1").addClass("big-title margin-50");
// $("h1").text("Good");
// $("button").html("<em>Hey</em>");


// console.log($("img").attr("src"));
// $("a").attr("href","https://www.youtube.com");


// $("h1").click(function(){
//   $("h1").css("color","purple");
// });


// $("button").click(function(){
//   $("h1").css("color","purple");
// });


// $("input").keypress(function(event){
//   console.log(event.key);
// });


// $(document).keypress(function(event){
//   $("h1").html(event.key);
// });


// $("h1").on("mouseover",function(){
//   $("h1").css("color","purple");
// });


// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");


// $("button").click(function(){
//   $("h1").hide();
// });


// $("button").on("click",function(){
//   $("h1").toggle();
// });


$("button").on("click",function(){
  $("h1").animate({opacity:0.5});
});
