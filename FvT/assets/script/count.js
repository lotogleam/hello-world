var counter = 0;
var countButton = document.getElementsByClassName("countButton")[0];
var displayCount = document.getElementsByClassName("displayCount")[0];
function vote(){
  counter=counter+1;
  displayCount.innerHTML = counter;
}
var count=0;
var countButton1 = document.getElementsByClassName("countButton")[1];
var displayCount1 = document.getElementsByClassName("displayCount")[1];
function vote1(){
  count=count+1;
  displayCount1.innerHTML = count;
}
function reset(){
    count=0;
    counter=0;
    displayCount.innerHTML = 0;
    displayCount1.innerHTML = 0;
}