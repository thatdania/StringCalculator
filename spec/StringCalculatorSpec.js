describe("StringCalculator", function() {

  beforeEach(function() {
    stringCalculator = new StringCalculator
  });

  describe("#caculate", function(){
    it('should return 0 if the method is not given any arguments', function(){
      expect(stringCalculator.converter()).toEqual(0)
    });

    it('should return value if one argument is given', function(){
      stringCalculator.converter("1")
      expect(stringCalculator.numbers).toEqual([1])
    });

    it('should return value if two argument is given', function(){
      stringCalculator.converter("1","2")
      expect(stringCalculator.numbers).toEqual([1,2])
    });
  });

  describe("#sum", function(){
    it('should sum numbers in array', function(){
      expect(stringCalculator.calculate([1,2])).toEqual(3)
    });
  });

});
