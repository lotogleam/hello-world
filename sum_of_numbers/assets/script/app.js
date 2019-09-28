function addsum(){
    var n = document.getElementsByClassName("question")[0].value;
    sum = 0;
    for(i = 0;i <= n; i++) 
    {
        sum = sum + i;
    } 
    var ans = document.getElementsByClassName("answer")[0];
    ans.value = sum;   
}
 //function addsum(){
//     var ans;
//     var n=document.getElementsByClassName("question")[0].value;
//     ans= (n * (n+1)) / 2;
//     document.getElementsByClassName("answer")[0].value=ans;
// }