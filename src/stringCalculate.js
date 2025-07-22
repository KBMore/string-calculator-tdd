 function add(numbers){
    if(numbers === "")
        return 0;

    let delimeter = ',';
    if(numbers.startsWith('//')){
        const arr = numbers.split('\n');
        delimeter = arr[0][2];
        numbers = arr[1];
    }

    numbers = numbers.replace(/\n/g,  delimeter);
    const nums = numbers.split(new RegExp(`[${delimeter}, \n]`)).map(Number);

    const filterNegative = nums.filter(num=>num < 0);

    if(filterNegative.length > 0){
        throw new Error(`Negative numbers not allowed: ${filterNegative.join(",")}`);
    }

    return nums.reduce((acc, num)=> acc + parseInt(num), 0);
}

module.exports = { add }
 