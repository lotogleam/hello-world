
function dis(N) {
    var n1= 0;
    var i;
      for(var i = 1; i <= N; i++){
        n1=n1+ i;
      }
      return n1;
  }
  
  function output(){
    val = document.getElementById("num").value;
    document.getElementById("input").innerHTML=dis(val) + " is the sum of given number";  }