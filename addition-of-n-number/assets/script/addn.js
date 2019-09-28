function addition(){
    var n=document.getElementsByClassName("input-text")[0].value;
    soln=0;
     for(i=0;i<=n;i++)
     {
         soln=soln+i;
     }
    //soln = n*(n+1/2;
    document.getElementsByClassName("display-solution")[0].innerHTML=soln;
}