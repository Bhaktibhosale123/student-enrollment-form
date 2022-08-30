var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var gender = document.getElementById("gender");
var dob = document.getElementById("dob");
var website = document.getElementById("web");
var image = document.getElementById("img");

/*--------------form validation----------------*/

function formValidation() {

  var letters = /^[A-Za-z]+$/;
  if (!fname.value.match(letters) || fname.value == "") {
    window.alert('Please enter valid First name!');
    fname.focus();
    return false;
  }

  if (!lname.value.match(letters) || lname.value == "") {
    window.alert('Please enter valid Last name!');
    lname.focus();
    return false;
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat) || email.value == "") {
    window.alert("Please enter valid email format!");
    email.focus();
    return false;
  }

  var mobileformat = /^\(?([5-9]{1})\)?([0-9]{9})$/;
  if ( /*!mobile.value.match(mobileformat) ||*/ mobile.value == "") {
    window.alert("Please enter valid Mobile number!");
    mobile.focus();
    return false;
  }
  if (dob.value == "") {
    window.alert("Please enter valid Date Of Birth!");
    dob.focus();
    return false;
  }
  if (!website.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) ||
    website.value == '') {
    window.alert("Please enter valid Website URL!");
    website.focus();
    return false;
  }
  if (image.value === "") {
    window.alert("Please upload your photo!")
    image.focus();
    return false;
  } else {
    return true;
  }
}

/*---------Display data----------*/
function displayData() {
  if (!formValidation()) {
    return
  }

  var displayNew = document.createElement("tr");
  var newImg = document.createElement("td");
  var newName = document.createElement("td");
  var newEmail = document.createElement("td");
  var newMobile = document.createElement("td");
  var newGender = document.createElement("td");
  var newDOB = document.createElement("td");
  var newWeb = document.createElement("td");
  var newSkills = document.createElement("td");

  newImg.innerHTML = "<img src=" + URL.createObjectURL(image.files[0]) + ">";
  newName.textContent = fname.value + " " + lname.value;
  newEmail.textContent = email.value;
  newMobile.textContent = mobile.value;
  newGender.textContent = gender.querySelector('input:checked').value;
  newDOB.textContent = dob.value;
  newWeb.textContent = website.value;
  displayNew.append(newImg);
  displayNew.append(newName);
  displayNew.append(newEmail);
  displayNew.append(newMobile);
  displayNew.append(newGender);
  displayNew.append(newDOB);
  displayNew.append(newWeb);
  document.getElementById('newTable').append(displayNew);
  window.alert("Student added.")
}

/*---------Resetting form----------*/
function resetForm() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("web").value = "";
  document.getElementById("img").value = "";

  var gender = document.querySelectorAll('input[name="gender"]');
  for (const rb of gender) {
    rb.checked = "Others";
  }
}
