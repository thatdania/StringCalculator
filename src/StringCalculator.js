function StringCalculator(){
  this.numbers = []

}

StringCalculator.prototype.calculate = function(...input){
  if(input.length === 0){
    return 0
  } else {
    for (i = 0; i < input.length; i++) {
      this.numbers.push(parseInt(input[i]))
    }
    var sum = this.numbers.reduce((a, b) => a + b, 0);
    return sum
  }

}
