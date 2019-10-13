// function addd(){
//     document.getElementsByClassName("showww")[0].innerText=event.which;

// }
function addition(){
    console.log(event);
    var n=document.getElementsByClassName("input-text")[0].value;
    
    soln=0;
      for(i=0;i<=n;i++)
      {
          soln=soln+i;
      }
    document.getElementsByClassName("display-solution")[0].innerHTML=soln;
    
}
function dates(){
    var a=new date();
    setInterval(dates() {
    document.getElementsByClassName("showtime")[0].innerText=a
    }, 1000);
}


// soln=0;
// for(i=0;i<=n;i++)
// {
//     soln=soln+i;
// }
// //soln = n*(n+1)/2;
// document.getElementsByClassName("display-solution")[0].innerHTML=soln;