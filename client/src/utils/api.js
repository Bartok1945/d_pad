$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const loginEmail = $("input#login-email");
    const loginPassword = $("input#login-password");
    const signUpForm = $("form.signup");
    const signupEmail = $("input#signup-email");
    const signupPassword = $("input#signup-password");
    
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        email: loginEmail.val().trim(),
        password: loginPassword.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      loginEmail.val("");
      loginPassword.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(() => {
          window.location.replace("/members");
          // If there's an error, log the error
        })
    }
     // When the signup button is clicked, we validate the email and password are not blank
     signUpForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        email: signupEmail.val().trim(),
        password: signupPassword.val().trim()
      };
      console.log("userData", userData)
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      signupEmail.val("");
      signupPassword.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(() => {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#signUpAlert .msg").text('Please enter a valid email address');
      $("#signUpAlert").fadeIn(500);
    }
  });
  