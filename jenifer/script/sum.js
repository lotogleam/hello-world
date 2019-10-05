
  
function sum1()
{
    var n= document.getElementsByClassName("user-name")[0];
    n=parseInt(n.value);
    add=(n*(n+1))/2;
     var elem=document.getElementById("add");
   elem.innerHTML="the value of sum is " +add; 
   console.log(event);
}
function validation() {
   if(event.which === 83) {
    sum1();
   }
 }

