var details = {
  pankaj : "<h1>Hello,<br/> I am Mr.Pankaj. We are working on SPA 101 and it's pretty kool!</h1>",
  gayathri : "<h2>No personal details</h2>",
  jenifer : "mmmmmmmmm",
  priya : "See Gayathri's laptop",
  raksheeth : "I like Thor!",
  paona :  "I want new laptop."
}

function showDetails(name) {
  var elem = document.getElementsByClassName("person-details")[0];
  elem.innerHTML = details[name];
}