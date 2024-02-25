// Break the process down by steps

// Declare counters & empty variables

let totalInterestAccumulated = 0;
let totalAmountPaid = 0;
let numberOfPaymentsMade = 0;

// Declare initial payment amount
let monthlyPayment = 101;

// declare initial interest amount
let interestAmount = 72.02;

// Declare amount for account
let accountTotal = 2956.39;

// count payment amount & payments made
numberOfPaymentsMade += 1;
totalAmountPaid += monthlyPayment;

// A payment is made to the account
accountTotal -= monthlyPayment;

// Add interest accumulated
totalInterestAccumulated += interestAmount;

// Interest is calculated by using relative change
let interestRate = ((accountTotal - interestAmount) / accountTotal) * 100;
console.log(interestRate);

// Add interest rate to account Total

accountTotal += interestRate * accountTotal;
console.log(accountTotal);
