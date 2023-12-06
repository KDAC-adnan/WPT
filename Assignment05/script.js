const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];
const MIN_LENGTH = 1;

function validateField(name,refToElement, refToErrorElement, errorMessage) {
  if (refToElement.value.length <= MIN_LENGTH) {
    refToErrorElement.innerText = errorMessage;
  } else {
    refToErrorElement.innerText = "";
    window.sessionStorage.setItem(name,refToElement.value);
  }
}

window.onload = function () {
  var refToState = document.getElementById("state");
  for (i = 0; i < indianStates.length; i++) {
    let opt = `<option value="${indianStates[i]}">${indianStates[i]}</option>`;
    refToState.innerHTML += opt;
  }
};

function submit() {
  var refToCnum = document.getElementById("cnum");
  var refToCnumErro = document.getElementById("cnumError");
  var refToCname = document.getElementById("cname");
  var refToCnameError = document.getElementById("cnameError");
  var refToEmail = document.getElementById("email");
  var refToEmailError = document.getElementById("emailError");
  var refToPassword = document.getElementById("password");
  var refToCnfPassword = document.getElementById("cnfPassword");
  var refToCnfPasswordError = document.getElementById("cnfPasswordError");
  var refToMobile = document.getElementById("mobileNo");
  var refToMobileError = document.getElementById("mobileNoError");
  var refToCity = document.getElementById("city");
  var refToCityError = document.getElementById("cityError");
  var refToPincode = document.getElementById("pincode");
  var refToPincodeError = document.getElementById("pincodeError");
  var refToPaymentMode = document.getElementsByName("paymentMode");
  var refToPaymentModeErro = document.getElementById("paymentModeError");

  validateField("cnum",refToCnum, refToCnumErro, "can not be empty");
  validateField("cname",refToCname, refToCnameError, "can not be empty");
  validateField("email",refToEmail, refToEmailError, "can not be empty");

  var password = refToPassword.value;
  var cnfPassword = refToCnfPassword.value;

  validateField(
    "",
    refToPassword,
    refToCnfPasswordError,
    "password cannot be empty"
  );
  validateField(
    "",
    refToCnfPassword,
    refToCnfPasswordError,
    "password cannot be empty"
  );

  if (password !== cnfPassword) {
    refToCnfPasswordError.innerText = "password is not matching!";
  } else if (password === cnfPassword && password.length > 0) {
    refToCnfPasswordError.innerText = "password matched!";
    refToCnfPasswordError.style.color = "green";
    window.sessionStorage.setItem("password",password);
    window.setTimeout(()=>{
        refToCnfPasswordError.innerText = "";
    },2000);
  }


  if (refToMobile.value.length < 10) {
    refToMobileError.innerText = "must be 10 digit number";
  } else {
    refToMobileError.innerText = "";
    window.sessionStorage.setItem("mobileNo",refToMobile.value);
  }

  validateField("city",refToCity, refToCityError, "can not be empty");
  
  if (
    refToPincode.value.length < 6 ||
    refToPincode.value.length > 6 ||
    parseInt(refToPincode.value) < 0
  ) {
    refToPincodeError.innerText = "must be 6 digit";
  } else {
    window.sessionStorage.setItem("pincode",refToPincode.value);
    refToPincodeError.innerText = "";
  }

  var refToState = document.getElementById("state");
  var refToStateError = document.getElementById("stateError");

  if (refToState.value === "") {
    refToStateError.innerText = "state name is required";
  } else {
    refToStateError.innerText = "";
    window.sessionStorage.setItem("state",refToState.value);
  }

  var checkedCount = 0;
  var paymentArr=[];
  for (let i = 0; i < refToPaymentMode.length; i++) {
    if (refToPaymentMode[i].checked) 
    {
        paymentArr.push(refToPaymentMode[i].value);
        checkedCount++;
    }
  }
  
  if (checkedCount < 2) {
    refToPaymentModeErro.innerText = "select atleast 2 checkbox";
  } else {
    window.sessionStorage.setItem("paymentMode",paymentArr);
    refToPaymentModeErro.innerText = "";
  }

  var errorMessages = [
    refToCnumErro.innerText,
    refToCnameError.innerText,
    refToEmailError.innerText,
    // refToCnfPasswordError.innerText,
    refToMobileError.innerText,
    refToCityError.innerText,
    refToPincodeError.innerText,
    refToStateError.innerText,
    refToPaymentModeErro.innerText,
  ];

  if (errorMessages.some((message) => message.trim() !== "")) {
    alert("Please fill in all required fields correctly before proceeding.");
  } else {
    
    window.location.href = "welcome.html"; // Replace with the URL of your next page
  }
}
