const assert = require("chai").assert;
const cpfValidator = require("../lib/validate");

describe("retCpfValidator()", () => {
    it("deve retornar true", () => {
    assert.equal(cpfValidator("06414973696"), true);
    });
    it("deve retornar false", () => {
    assert.equal(cpfValidator("06418973696"), false);
    });
    it("deve retornar false", () => {
    assert.equal(cpfValidator("12349054987"), false);
    });
    it("deve retornar true", () => {
    assert.equal(cpfValidator("08172315449"), true);
    });
    it("deve retornar false", () => {
    assert.equal(cpfValidator("081723I5449"), false);
    });
    it("deve retornar true", () => {
    assert.equal(cpfValidator("84958094008"), true);
    });
    it("deve retornar false", () => {
    assert.equal(cpfValidator("aaaaaaaaaaa"), false);
    });
    it("deve retornar false", () => {
    assert.equal(cpfValidator("00000000000"), false);
    });
});