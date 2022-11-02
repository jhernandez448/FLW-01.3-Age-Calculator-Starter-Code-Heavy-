let inputName = document.querySelector(".name");
let inputYear = document.querySelector(".year");
let message = document.querySelector(".message");
let ageButton = document.querySelector(".age-button")

// task 4


// task 5 & 6
let currentYear = 2022;
let userName;
let userYear;
let age;

// task 7




ageButton.onclick = function() {

  // task 8
 userName = inputName.value;

  // task 9
 userYear = Number(inputYear.value);

  // task 10
 age = currentYear-userYear;

  // task 11
  message.innerHTML = "<p>" + userName + ", you are/turning " +age+ " years old. </p>";
}
