
  
 function sum()
{
    var n= document.getElementsByClassName("user-name")[0];
    add=n.value*(n.value-1)/2;
   var elem=document.getElementById("add")
   elem.innerHTML="the value of sum is " +add;
}