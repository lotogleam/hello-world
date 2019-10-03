// function addsum(){
//     var n = document.getElementsByClassName("question")[0].value;
//     sum = 0;
//     for(i = 0;i <= n; i++) 
//     {
//         sum = sum + i;
//     } 
//     var ans = document.getElementsByClassName("answer")[0];
//     ans.value = sum;   
// }
function addsum(){
     var ans;     
     var n=document.getElementsByClassName("question")[0].value;
     n= parseInt(n);
     ans= (n * (n+1)) / 2;
     document.getElementsByClassName("answer")[0].value=ans;
     console.log(event);
 }
 function validateClick() {
    console.log(event);
    if(event.which === 83) {
     addsum();
    }
  }
function getWhichCode(){
    document.getElementsByClassName("elemValue")[0].innerText=event.which;
}
