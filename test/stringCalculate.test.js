const { add }  = require("../src/stringCalculate");

test('it should return 0 for empty string', ()=>{
    expect(add("")).toBe(0);
});

test('it should return same number if it is a single number', ()=>{
    expect(add("8")).toBe(8);
});

test('it should return sum of two numbers', ()=>{
    expect(add("4, 5")).toBe(9);
});

test('it should return sum if all numbers', ()=>{
    expect(add("2,4,6")).toBe(12);
});

test('it should handle new line between numbers',()=>{
    expect(add("2\n4,3")).toBe(9);
});

test('it should support delimeter', ()=>{
    expect(add("//;\n4;3")).toBe(7);
});

test('it should not allow negative numbers', ()=>{
    expect(()=> add("-2, -3, -1")).toThrow('Negative numbers not allowed: -2,-3,-1')
})


