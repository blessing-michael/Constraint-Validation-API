const form = document.getElementById("form");
const email = document.getElementById("email");
const emailErrorMes = document.querySelector("#email +span.error-Message");

const country = document.getElementById("country");
const countryerror = document.querySelector("#country +span.error-Message");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailErrorMes.textContent = "";
    emailErrorMes.className = "error-Message";
  } else {
    displayError();
  }
});
country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryerror.textContent = "";
    countryerror.className = "error-Message";
  } else {
    displayError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    displayError();

    event.preventDefault();
  }
  if (!country.validity.valid) {
    displayError();

    event.preventDefault();
  }
});

function displayError() {
  if (email.validity.valueMissing) {
    emailErrorMes.textContent = "Please enter your email address";
  } else if (email.validity.typeMismatch) {
    emailErrorMes.textContent = "Entered value needs to match an email address";
  }
  emailErrorMes.className = "error-Message active";

  //validity for country
  if (document.activeElement == country) {
    if (country.validity.valueMissing) {
      countryerror.textContent = "Please enter your country";
    } else if (country.validity.tooShort) {
      countryerror.textContent = `Country code too short. Code should be at least ${country.minLength} characters.`;
    }
    countryerror.className = "error-Message active";
  }
}