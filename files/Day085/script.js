// Break the process down by steps

// Declare counters & empty variables

let totalInterestAccumulated = 0;
let totalAmountPaid = 0;
let totalPaymentsMade = 0;
let interestRate = 0.0394;

// Declare initial payment amount
// let monthlyPayment = 100;
let monthlyPayment = 200;

// declare initial interest amount
let interestAmount = 102;

// Declare amount for account
let accountTotal = 2956.39;
// let accountTotal = 1210.39;
console.log("~~~~~~~~~~~~~~~ Start: ", accountTotal);
// Start a loop here
for (x = 0; accountTotal >= 0; x++) {
  // count payment amount & payments made
  totalPaymentsMade += 1;
  totalAmountPaid += monthlyPayment;
  console.log("Payment amount: ", monthlyPayment);
  console.log("~~~~~~~~~~~~~~~~ Payments Made: ", totalPaymentsMade);
  // A payment is made to the account
  accountTotal = accountTotal - monthlyPayment;
  console.log("account after payment", accountTotal);

  // Add interest accumulated
  totalInterestAccumulated += interestAmount;

  // Interest is calculated by using relative change

  //   interestRate = (accountTotal + interestAmount - accountTotal) / accountTotal;
  //   console.log("interest rate", interestRate);

  // Add interest rate to account Total

  console.log("interest amount", interestRate * accountTotal);
  accountTotal += interestRate * accountTotal;
  console.log("account total", accountTotal);
}

console.log("total interest accumulated: ", totalInterestAccumulated);
console.log("total amount paid: ", totalAmountPaid);
console.log("total payments made: ", totalPaymentsMade);
