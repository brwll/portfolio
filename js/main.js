$(document).ready(function() {
  $(".element").throwable({
    drag: true,
    gravity: {
      x: 0,
      y: 0
    },
    impulse: {
      f: 500,
      p: {
        x: 1,
        y: 5
      }
    },
    autostart: true,
    bounce: 0.5,
    damping: 50
  });
});



$('.element').on('mouseenter', function() {
  var projectId = $(this).attr('data-project-id');
  $('.image[data-project-id="'+projectId+'"]').addClass("show");
}).on('mouseleave', function() {
  var projectId = $(this).attr('data-project-id');
  $('.image[data-project-id="'+projectId+'"]').removeClass("show");
});

$('.element').on('mouseenter', function() {
  var projectId = $(this).attr('data-project-id');
  $('.hoverimage[data-project-id="'+projectId+'"]').addClass("show");
}).on('mouseleave', function() {
  var projectId = $(this).attr('data-project-id');
  $('.hoverimage[data-project-id="'+projectId+'"]').removeClass("show");
});


    $(function(){
	$(".menu").click(function(){
  	$(".menuoverlay").toggleClass("open");
  });
});

$(function(){
	$(".menu").click(function(){
  	$(".menu").toggleClass("open");
  });
});

    $(function(){
	$(".menu").click(function(){
  	$(".element").toggleClass("elementoverlay");
  });
});