function updateContent(){
  var name=document.getElementsByClassName("user-name")[0];
  var elem= document.getElementById("intro");
  elem.innerHTML= "I am" +" "+ name.value + " .";  
}
