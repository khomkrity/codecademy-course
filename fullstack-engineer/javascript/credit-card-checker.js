// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [9, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the credit cards above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  invalid6,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

const doubleEveryOther = (element, index, array) => {
  let length = array.length;
  if (length % 2 === 0) {
    if (index % 2 === 0) {
      let doubledValue = element * 2;
      return doubledValue > 9 ? doubledValue - 9 : doubledValue;
    } else {
      return element;
    }
  } else {
    if (index % 2 !== 0) {
      let doubledValue = element * 2;
      return doubledValue > 9 ? doubledValue - 9 : doubledValue;
    } else {
      return element;
    }
  }
};

const sumOfAllDigits = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

const validateCreditCard = creditCard => {
  let doubledValues = creditCard.map(doubleEveryOther);
  let sum = doubledValues.reduce(sumOfAllDigits);
  return sum % 10 === 0;
};

const invalidCreditCard = creditCard => !validateCreditCard(creditCard);

const findInvalidCards = creditCards => {
  let invalidCards = creditCards.filter(invalidCreditCard);
  return invalidCards;
};

const findCompany = creditCard => {
  let firstDigit = creditCard[0];
  if (firstDigit === 3) {
    return 'Amex (American Express)';
  } else if (firstDigit === 4) {
    return 'Visa';
  } else if (firstDigit === 5) {
    return 'Mastercard';
  } else if (firstDigit === 6) {
    return 'Discover';
  } else {
    return 'Company not found';
  }
};

const findInvalidCardCompanies = creditCards => {
  let invalidCards = findInvalidCards(creditCards);
  let companies = invalidCards.map(findCompany);
  return [...new Set(companies)];
};

const printResult = creditCards => {
  const totalCreditCards = creditCards.length;
  let countValid = 0;
  console.log('Project Goal:', 'validate all credit cards');
  creditCards.forEach(creditCard => {
    let isValid = validateCreditCard(creditCard);
    if (isValid) countValid++;
    console.log('card number:', creditCard);
    console.log('is valid:', isValid);
    !isValid ? console.log('invalid company:', findCompany(creditCard)) : console.log('');
  });
  console.log('');
  console.log('Summary');
  console.log('total credit cards:', totalCreditCards);
  console.log('total valid credit cards:', totalCreditCards - (totalCreditCards - countValid));
  console.log('total invalid credit cards:', totalCreditCards - countValid);
  console.log('invalid card companies:', findInvalidCardCompanies(creditCards));
};

printResult(batch);
