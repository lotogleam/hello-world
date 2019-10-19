// var form={
//     username:document.getElementsByName("uname"),
//     emailId:document.getElementsByName("email"),
//     password:document.getElementsByName("pwd")
// };
$(document).ready(function() {
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
      console.log(valueToBeSaved);
      valueToBeSaved=JSON.stringify(valueToBeSaved);
      localStorage.setItem("user-info",valueToBeSaved);
      form.find(".u-name").val()=localStorage.getItem("user-info",valueToBeSaved.name);
    })
  });