function validate(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    const msgBox = document.getElementById("message");
  
    let message = "";
  
    if (email === "") {
      message = "Enter your email here...";
      msgBox.style.color = "red";
    } else if (pass === "") {
      message = "Enter your password.";
      msgBox.style.color = "red";
    } else if (age === "") {
      message = "Enter your age.";
      msgBox.style.color = "red";
    } else {
      message = "Login successful.";
      msgBox.style.color = "green";
    }
  
    msgBox.innerText = message;
  }
  
  document.getElementById("login-form").addEventListener("submit", validate);
  