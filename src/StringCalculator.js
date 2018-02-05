function StringCalculator(){

}

StringCalculator.prototype.calculate = function(input){
  if(input === ""){
    return 0
  } else {
      return parseInt(input)
  }

}
