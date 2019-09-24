function updateContent(){
  var uname=document.getElementsByClassName("user-name")[0];
  var elem=document.getElementById("intro");
  elem.innerHTML=uname.value;  
}