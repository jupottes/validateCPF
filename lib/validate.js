
function cpfValidator(cpfString) {
  const cpfArr = cpfString.split('');
  const cpf = cpfCheck(cpfArr);
  const isRepeatingChars = cpfArr.every((elem) => elem === cpfArr[0]);
  const firstNum = testDigit(mod11(getSumOfMult(cpf, 10)));
  const secondNum = testDigit(mod11(
    getSumOfMult(cpf.concat(firstNum), 11)));
    return !isRepeatingChars && (firstNum === parseInt(cpfArr[9]) && secondNum === parseInt(cpfArr[10]));

}

const mod11 = (num) => num % 11;

const testDigit = (num) => {
  if (num < 2) {
    return 0;
  } else {
    return 11 - num;
  }
};
const cpfCheck = (cpf) => {
  return cpf.slice(0, 9);
};

const sumOfMult = (total) => (result, num, i) =>
  result + (num * total--);

const getSumOfMult = (list, total) =>
  list.reduce(sumOfMult(total), 0);

module.exports = cpfValidator;