const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const phone = document.getElementById("phone");
const btnSubmit = document.getElementById("btn_submit");

function validateForm() {
   const emailValue = email.value;
   const passwordValue = password.value;
   const confirmPasswordValue = confirmPassword.value;
   const phoneValue = phone.value;

   // Email validation
   if (!emailValue.includes("@") || !emailValue.includes(".")) {
      alert("Email must contain @ and .");
      return false;
   }

   // Password length validation
   if (passwordValue.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
   }

   // Password match validation
   if (passwordValue !== confirmPasswordValue) {
      alert("Password and Confirm Password must match.");
      return false;
   }

   // Phone validation (digits only)
   if (isNaN(phoneValue) || phoneValue.trim() === "") {
      alert("Phone number must contain only digits.");
      return false;
   }

   return true;
}

btnSubmit.addEventListener("click", (e) => {
   e.preventDefault();
   if (validateForm()) {
      // Submit form
      alert("Registration Successful!");
   }
});
