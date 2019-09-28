
  
function sum1()
{
    var n= document.getElementsByClassName("user-name")[0];
    add=0;
     for(i=0;i<=n.value;i++) 
     {
         add=add+i;
     } 
     var elem=document.getElementById("add");
   elem.innerHTML="the value of sum is " +add; 
}