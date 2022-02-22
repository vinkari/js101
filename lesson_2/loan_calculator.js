const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcomeMessage () {
  prompt('Welcome to the Loan calculator!');
}

function goodbyeMessage () {
  prompt('Thanks for using the Loan calculator!');
}

function isInvalidValue(number) {
  return number.trim() === '' || number <= 0 || Number.isNaN(Number(number));
}

function isInvalidRate(number) {
  return number.trim() === '' || number < 0 || Number.isNaN(Number(number));
}

function getAmount () {
  prompt('Please enter the loan amount:');
  let amt = readline.question();
  while (isInvalidValue(amt)) {
    prompt('Please enter a number greater than zero');
    amt = readline.question();
  }
  return amt;
}

function getAnualPercentRate () {
  prompt('Please enter the Annual Percentage Rate as a percent value (eg. 7.5 for 7.5%):');
  let rate = readline.question();
  while (isInvalidRate(rate)) {
    prompt('Please enter a number greater than or equal to zero');
    rate = readline.question();
  }
  return rate / 100;
}

function getLoanDuration () {
  prompt('Please enter the loan duration in months:');
  let duration = readline.question();
  while (isInvalidValue(duration)) {
    prompt('Please enter a number greater than zero');
    duration = readline.question();
  }
  return duration;
}

function computeMonthlyPayment (amount, annualRate, loanDuration) {
  let monthlyRate = Number(annualRate) / 12;
  if (monthlyRate === 0) {
    return Number(amount) / loanDuration;
  } else {
    return Number(amount) *
      (monthlyRate /
      (1 - Math.pow((1 + monthlyRate), (Number(-loanDuration)))));
  }
}

function displayMonthlyPayment (monthlyPayment) {
  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
}

function repeatCalculationCheck () {
  prompt('Would you like to do another calucation? (enter "y" or "n")');
  let answer = readline.question().toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    prompt('Please enter "y" for yes or "n" for no');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

console.clear();

welcomeMessage();

while (true) {
  let amount = getAmount();
  let annualRate = getAnualPercentRate();
  let loanDuration = getLoanDuration();
  let monthlyPayment = computeMonthlyPayment(amount, annualRate, loanDuration);

  displayMonthlyPayment(monthlyPayment);

  let repeat = repeatCalculationCheck();
  if (repeat === 'n' || repeat === 'no') break;

  console.clear();
}

goodbyeMessage();