
var a=document.getElementsByClassName("display")[0];
function number(num){
    a.value+=num;
}
function backbutton(){
    var clr = a.value;
     a.value=clr.substring(0,clr.length -1);
}
function clr(){
    a.value=" ";
}
function result(){
    var res=eval(a.value);
    a.value=res;
}

    
