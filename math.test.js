const { divide, multiply, subtract, sum } = require("./math");

describe("math", () => {
  test("should sum 2+2 to be 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
  test("should multiply 3*3 to be 9", () => {
    const result = multiply(3, 3);
    expect(result).toBe(9);
  });
  test("should subtract 10-5 to be 5", () => {
    const result = subtract(10, 5);
    expect(result).toBe(5);
  });
  test("should divide 10/5 to be 2", () => {
    const result = divide(10, 5);
    expect(result).toBe(2);
  })
});

test("Array", ()=>{
    let days=["Monday", "Tuesday", "Wednesday",];
    expect(days).toContain("Tuesday");
    expect(days).not.toContain("Friday");
})