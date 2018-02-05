function StringCalculator(){
  this.numbers = []

}

StringCalculator.prototype.converter = function(...input){
  if(input.length === 0){
    return 0
  } else {
    for (i = 0; i < input.length; i++) {
      this.numbers.push(parseInt(input[i]))
    }
    return this.calculate(this.numbers);
  }
}


StringCalculator.prototype.calculate = function(array){
  var arrayChecker = array.filter(function(str) {
    return /\S/.test(str); });
  var sum = arrayChecker.reduce((a, b) => a + b, 0);
  return sum
}
