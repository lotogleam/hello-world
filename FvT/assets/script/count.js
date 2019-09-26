var counter = 0;
var countButton = document.getElementsByClassName("count-button")[0];
var displayCount = document.getElementsByClassName("displayCount")[0];
function vote(){
  counter=counter+1;
  displayCount.innerHTML = "Count:" + counter;
}
var count=0;
var countButton1 = document.getElementsByClassName("count-button")[1];
var displayCount1 = document.getElementsByClassName("displayCount")[1];
function vote1(){
  count=count+1;
  displayCount1.innerHTML = "Count:" + count;
}
function reset(){
    count=0;
    counter=0;
    displayCount.innerHTML = 0;
    displayCount1.innerHTML = 0;
}