$(document).ready(function() {
  $(".box").click(function(e){
    e.stopPropagation();
    alert($(this).attr("color"));
  });
});