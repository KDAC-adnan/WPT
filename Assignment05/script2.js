function getData() {
  var refToCnum = document.getElementById("cnum");
  var refToCname = document.getElementById("cname");
  var refToEmail = document.getElementById("email");
  var refToMobile = document.getElementById("mobileNo");
  var refToState = document.getElementById("state");
  var refToCity = document.getElementById("city");
  var refToPincode = document.getElementById("pincode");
  var refToPaymentMode = document.getElementById("paymentMode");

  refToCnum.innerText=`Cnum: ${window.sessionStorage.getItem("cnum")}`;
  refToCname.innerText=`Cname: ${window.sessionStorage.getItem("cname")}`;
  refToEmail.innerText=`Email: ${window.sessionStorage.getItem("email")}`;
  refToMobile.innerText=`Mobile number: ${window.sessionStorage.getItem("mobileNo")}`
  refToState.innerText=`State: ${window.sessionStorage.getItem("state")}`;
  refToCity.innerText=`City: ${window.sessionStorage.getItem("city")}`;
  refToPincode.innerText=`Pincode: ${window.sessionStorage.getItem("pincode")}`;
  refToPaymentMode.innerText=`Payment Mode selected:${window.sessionStorage.getItem("paymentMode")}`
}
