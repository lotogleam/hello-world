$(document).ready(function() {
  initialize();
  $("form[name='userInfo']").on("submit", function(e) {
    // Stop the default action of the submit button.
    e.preventDefault();
    let form = $(this);
    // Assign the values as object properties.
    let valueToBeSaved = {
      name: form.find(".full-name").val(),
      email: form.find(".email").val(),
      password: form.find(".password").val()
    };

    // Check if already we have users saved, if yes, add the new user to the existing list
    // Else, create an array with current value
    let userList = getUserList();
    userList.push(valueToBeSaved);
    localStorage.setItem('userList', JSON.stringify(userList));
    if(userList.length) {
      $(".existing-users ol").append(generateUserTemplate(valueToBeSaved));
    }
    else {
      $(".existing-users").html('<ol>' + generateUserTemplate(valueToBeSaved) +'</ol>');
    }
    form[0].reset();
  });

  
});

function initialize() {
  let existingUsers = getUserList();
  if(existingUsers.length) {
    let template = generateUserTemplate();
    $(".existing-users").html(template);
  }
}

function generateUserTemplate(user) {
  let template = '';
  if(!user) {
    template += '<ol>';
    let userList = getUserList();
    for(let i =0; i<userList.length; i++) {
      let user = userList[i];
      template += '<li>' + user.name + '(' + user.email + ')</li>';
    }
    template += '</ol>';
  }
  else {
    template += '<li>' + user.name + '(' + user.email + ')</li>';
  }

  return template;
}

function getUserList() {
  let existingValues = [];
  if(localStorage.getItem('userList')) {
    existingValues = JSON.parse(localStorage.getItem('userList'));
  }

  return existingValues;
}