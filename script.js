function myFunction() {
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  if (!email.checkValidity()) {
    alert("Please fill out the email field");
  }
  else if(!pass.checkValidity()) {
    alert("Please fill out the password field");
  }
  else {
    window.location.assign= ("home.html");
  } 
}