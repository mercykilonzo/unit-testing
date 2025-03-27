const fizzBuzz = require("./fizzbuzz")


test("should be a multiple of 3 and 5", () => {
 expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test("should be a multiple of 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
})

test("should be a multiple of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})