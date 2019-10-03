
var number=document.getElementsByTagName("input");
var f1=0;
var f2=1;
var f3;
var i;
function output(){
    for(i=2;i<number;i++)
    f3=f2+f1;
    document.write(f3)
    f1=f2;
    f2=f3;
}