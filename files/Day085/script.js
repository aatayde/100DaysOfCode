// Break the process down by steps

// Declare counters & empty variables

let totalInterestAccumulated = 0;
let totalAmountPaid = 0;
let totalPaymentsMade = 0;
let interestRate = 3.949;

// Declare initial payment amount
let monthlyPayment = 101;

// declare initial interest amount
let interestAmount = 72.02;

// Declare amount for account
let accountTotal = 2956.39;
console.log("account amount", accountTotal);
// Start a loop here
for (x = 0; accountTotal >= 0; x++) {
  // count payment amount & payments made
  totalPaymentsMade += 1;
  totalAmountPaid += monthlyPayment;

  // A payment is made to the account
  accountTotal -= monthlyPayment;
  console.log("account total after payment", accountTotal);

  // Add interest accumulated
  totalInterestAccumulated += interestAmount;

  // Interest is calculated by using relative change

  interestRate = (accountTotal + interestAmount - accountTotal) / accountTotal;
  console.log("interest rate", interestRate);

  // Add interest rate to account Total

  accountTotal += interestRate * accountTotal;
  console.log("account total", accountTotal);
}

console.log(totalAmountPaid);
console.log(totalInterestAccumulated);
console.log(totalPaymentsMade);
