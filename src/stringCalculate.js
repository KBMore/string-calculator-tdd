 function add(numbers){
    if(numbers === "")
        return 0;
    numbers = numbers.replace(/\n/g, ',')
        return numbers.split(",").reduce((acc, num)=> acc + parseInt(num), 0)
    }

module.exports = { add }
 