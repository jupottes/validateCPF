var chai = require("chai");
var expect = chai.expect;
var cpf = require("../lib/validate")

describe("cpf", () => {
    describe("cpfValidator", () => {
        it("cpfValidator", () => {
            expect(cpf.cpfValidator("9", "6")).to.equal("9")
        });
    });
});