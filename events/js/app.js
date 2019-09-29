function validateClick() {
  console.log(event);
  if(event.which === 83) {
    getAndSummate();
  }
}

function getAndSummate() {
  var elem = document.getElementsByName("upto")[0],
    sum = performAddition(parseInt(elem.value));

  document.getElementsByClassName("result-wrapper")[0].innerHTML = '<p class="text-center">'+sum+'</p>';
}

function performAddition(upto) {
  var sum = 0;
  if(upto>0) {
    sum = upto*(upto+1)/2;
  }
  return sum;
}

function displayWhichCode() {
  document.getElementsByClassName("result-wrapper")[0].innerHTML = '<p class="text-center">'+event.which+'</p>';
}