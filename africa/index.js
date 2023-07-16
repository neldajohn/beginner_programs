const africanCountries = ["Algeria","Angola", "Benin","Botswana",
"Burkina Faso", "Burundi", "Cabo Verde","Cameroon","Central African Republic",
"Chad","Comoros","Democratic Republic of the Congo",
"Republic of the Congo","Djibouti","Egypt","Equatorial Guinea",
"Eritrea","Eswatini","Ethiopia","Gabon","Gambia",
"Ghana","Guinea","Guinea-Bissau", "Ivory Coast","Kenya",
"Lesotho","Liberia","Libya","Madagascar","Malawi",
"Mali", "Mauritania","Mauritius","Morocco","Mozambique", "Namibia","Niger",
"Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles",
"Sierra Leone","Somalia", "South Africa", "South Sudan","Sudan",
"Tanzania", "Togo","Tunisia","Uganda", "Zambia", "Zimbabwe"
];

// Get references to the input and button elements
const countryInput = document.getElementById('country-input');
const submitButton = document.getElementById('submit-button');

// Add an event listener to the submit button
submitButton.addEventListener('click', submitCountry);

// Add a keydown event listener to the input box
countryInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitCountry();
  }
});

// Function to handle submitting the country
function submitCountry() {
  const enteredCountry = countryInput.value.trim().toLowerCase(); // Convert entered country to lowercase

  // Check if the entered country is in the African countries list
  const matchingCountry = africanCountries.find(country =>
    country.toLowerCase() === enteredCountry
  );

  if (matchingCountry) {
    const countryContainer = document.querySelector(`[data-country="${matchingCountry}"]`);

    if (countryContainer) {
      // Update the country container with the entered country
      countryContainer.textContent = matchingCountry;
      countryContainer.classList.add('guessed-country');
    }
  }


  // Clear the input box after submitting
  countryInput.value = '';
};