$(document).ready(function() {
  $(".box").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    alert($(this).attr("color"));
  });

  $(".toggle").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).siblings(".box").slideToggle();
  }) 
});