const { add }  = require("../src/stringCalculate");

test('it should return 0 for empty string', ()=>{
    expect(add("")).toBe(0);
});
