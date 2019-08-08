$(document).ready(function() {
  $(".element").throwable({
    drag: true,
    gravity: {
      x: 0,
      y: 0
    },
    impulse: {
      f: 250,
      p: {
        x: 0,
        y: 10
      }
    },
    autostart: true,
    bounce: 0.5,
    damping: 50
  });
});



$('.element').on('mouseenter', function() {
  var projectId = $(this).attr('data-project-id');
  $('.image[data-project-id="'+projectId+'"], .hoverimage[data-project-id="'+projectId+'"], .hold[data-project-id="'+projectId+'"]').addClass("show");
}).on('mouseleave', function() {
  var projectId = $(this).attr('data-project-id');
  $('.image[data-project-id="'+projectId+'"], .hoverimage[data-project-id="'+projectId+'"], .hold[data-project-id="'+projectId+'"]').removeClass("show");
});


$('.click-n-hold').on('mousedown', function() {
  $('.image-container').addClass("grow");
}).on('mouseup', function() {
  $('.image-container').removeClass("grow");
}).on('mouseleave', function() {
  $('.image-container').removeClass("grow");
});


$(".menu").click(function(){
  $(".menuoverlay, .menu, .hold").toggleClass("open");
  $(".element").toggleClass("elementoverlay");
});


var timeout_id = 0,
    hold_time = 1500,
    $hold_trigger = $('.click-n-hold');

$hold_trigger.on('click', function(e) {
  e.preventDefault();
})

$hold_trigger.on('mousedown', function(e) {
  e.preventDefault();
  var $project = $(this);
  timeout_id = setTimeout(function() {
    openProject($project);
  },hold_time);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeout_id);
});

function openProject($project) {
  var projectUrl = $project.attr('href');
  // window.location.href = projectUrl;
  window.open(projectUrl,'_blank');
}