 function add(numbers){
    if(numbers === "")
        return 0;
    if(numbers.includes(",")){
        return numbers.split(",").reduce((acc, num)=> acc + parseInt(num), 0)
    }
    return parseInt(numbers);
}

module.exports = { add }
 