describe("StringCalculator", function() {

  beforeEach(function() {
    stringCalculator = new StringCalculator
  });

  describe("#caculate", function(){
    it('should return 0 if the method is not given any arguments', function(){
      expect(stringCalculator.calculate()).toEqual(0)
    });
  });

});
