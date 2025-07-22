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
})


