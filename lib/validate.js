
function cpfValidator(cpfString) {
	const cpfArr = cpfString.split("")
	const cpf = cpfCheck(cpfArr)
	const firstNum = testDigit(mod11(getSumOfMult(cpf, 10)))
	const secondNum = testDigit(mod11(
		getSumOfMult(cpf.concat(firstNum), 11)))
	if (firstNum === parseInt(cpfArr[9]) && secondNum === parseInt(cpfArr[10])) {
		return true;
	} else {
		return false;
	}
}

const mod11 = (num) => num % 11

const testDigit = (num) => {
	if (num < 2) {
		return 0;
	} else {
		return 11 - num;
	}
}
const cpfCheck = (cpf) => {
	return cpf.slice(0, 9);
}

const sumOfMult = (total) => (result, num, i) =>
	result + (num * total--)

const getSumOfMult = (list, total) =>
	list.reduce(sumOfMult(total), 0)


console.log(cpfValidator("06414973696"))

module.exports = cpfValidator;