describe("StringCalculator", function() {

  beforeEach(function() {
    stringCalculator = new StringCalculator
  });

  describe("#caculate", function(){
    it('should return 0 if the method is not given any arguments', function(){
      expect(stringCalculator.calculate("")).toEqual(0)
    });

    it('should return value if one argument is give', function(){
      expect(stringCalculator.calculate("1")).toEqual(1)
    });

    it('should return value if one argument is give', function(){
      expect(stringCalculator.calculate("1","2")).toEqual(3)
    });
  });

});
