$(document).ready(function() {
  $(".box").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    alert($(this).attr("color"));
  });
});