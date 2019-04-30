const cpfRef = '06414973696'
const cpfArr = cpfRef.split("")

const mod11 = (num) => num % 11

const testDigit = (num) => {
	if (num < 2) {
		return "0";
	} else {
		return "11" - num;
	}
}
const cpfCheck = (cpf) => {
	if (cpf.map) {
		return cpf.slice(0, 9);
	} else {
		return cpf.substr(0, 9).split('')
	}
}

const cpf = cpfCheck(cpfRef)

const sumOfMult = (total) => (result, num, i) =>
	result + (num * total--)

const getSumOfMult = (list, total) =>
	list.reduce(sumOfMult(total), 0)

const firstNum = testDigit(mod11(getSumOfMult(cpf, 10)))

console.log(firstNum)

const secondNum = testDigit(mod11(
	getSumOfMult(cpf.concat(firstNum), 11)))

console.log(secondNum) // 1

function cpfValidator(cpf) {
	if (firstNum === parseInt(cpfArr[9]) && secondNum === parseInt(cpfArr[10])) {
		return true;
	} else {
		return false;
	}
}
console.log(cpfValidator(cpf))