function StringCalculator(){
  this.numbers = []
  this.sum = 0

}

StringCalculator.prototype.calculate = function(...input){
  if(input.length === 0){
    return 0
  } else {
    for (i = 0; i < input.length; i++) {
      this.numbers.push(parseInt(input[i]))
    }
    return this.checker(this.numbers);

  }
}

StringCalculator.prototype.checker = function(array){

  for (i = 0; i < array.length; i++) {
      if(array[i] < 0){
        return 'Sorry no negative numbers'
      } else if(array[i] > 1000){
      delete array[i]
  }
}

  var arrayChecker = array.filter(function(str) {
  return /\S/.test(str); });
  this.sum = arrayChecker.reduce((a, b) => a + b, 0);
  return this.sum
}
