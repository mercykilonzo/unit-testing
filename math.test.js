
const { subtract, add, multiply, divide } = require("./math");



test('adds 7 + 13 to equal 20', () => {
    expect(add(7,13)). toBe(20);
});

test('substract 10 - 5 to equal 5', () => {
    expect(subtract(10,5)). toBe(5);
});

test('mutiply 2 * 6 to equal 12', () => {
    expect(multiply(2,6)). toBe(12);
});

test('divide 7 / 13 to equal 20', () => {
    expect(divide(7,13)). toBe(20);
});

