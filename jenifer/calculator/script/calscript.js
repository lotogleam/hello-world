 var result=document.getElementsByClassName('result')[0];
 function number(value){
        result.value +=value; 
    
}
function clr(){
    result.value="";
}
function evalua(){
    var ans=eval(result.value);
    result.value =ans; 
}