
/* Index */
const validTargets = ["register", "forgot", "updates"];
const target = window.location.hash.slice(1); // remove '#'
if (validTargets.includes(target)) {
  showSection(target);
}

function showSection(idToShow) {
  const sections = ['register','forgot','updates']; // add more if needed

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = (id === idToShow) ? 'block' : 'none';
    }
  });
}


/* Function for registration */
function handleRegister(event) {
  event.preventDefault(); // Prevent page reload
const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

   // validation here 
  const fullname = document.getElementById("fullName").value
  const upperfullname = fullname.toUpperCase();
  
  const confirmpassword=document.getElementById("confirmpassword").value
  const strpassword = password.length;
  
  if(upperfullname.length < 5){
      alert("Invalid Name. Name must be greater than five characters.");
      return;
  }
  else if(strpassword < 5){
      alert ("Password must be greater than five characters");
      return;
  }
  else if(password!=confirmpassword){
   alert("❌❌❌Incorrect Password");
   return;
}
  else{
  
  
  
  alert(`🎉 Account created successfully!\nWelcome, ${upperfullname}, to LAUTECH Past Questions Portal!`);  
}

 
  // Redirect to home page after 1 second
  setTimeout(function () {
    window.location.href = "home.html";
  }, 1000);

}

/* Function for log in */
function logIn(event) {
  event.preventDefault(); // Prevent page reload

  // validation here 
  const loginPassword = document.getElementById("loginPassword").value
  const strpassword = loginPassword.length;
  if(strpassword < 5){
      alert ("Password must be greater than five characters");
      return
  }
  
  alert("🎉 Login successful!");

  // Redirect to home page after 1 second
  setTimeout(function () {
    window.location.href = "home.html";
  }, 10);
}

  
function handleForgotPassword(event) {
  event.preventDefault();

  const email = document.getElementById("forgot-email").value;

 
  alert(`A reset link has been sent to ${email}`);

  // Optionally return user to login
  setTimeout(() => {
    showSection(''); // Or reset to login UI
  }, 1500);
}



