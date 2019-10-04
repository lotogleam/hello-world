var display=document.getElementsByClassName("display")[0];
function initiate(){
    document.getElementsByTagName("button").disabled= true;
}
function on(){
    display.placeholder=0;
    display.value="";
} 
function off(){
    display.placeholder="";
    display.value="";
    document.getElementsByClassName("on")[0].disabled= true;
}
function clr() {
    var clear  = display.value;
    display.value=clear.substring(0,clear.length -1);
}
function input(num){
    display.value+=num;
}
function output(){
    var result=eval(display.value);
    display.value=result;
}