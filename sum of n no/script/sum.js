 
function addition(){
    var add= document.getElementsByClassName("user-name")[0];
    sum = 0;
    for(i = 0; i <= add.value; i++){
      sum += i; 
       }
 var elem=document.getElementById("sum");
elem.innerHTML="the value of sum is " +sum; 
}