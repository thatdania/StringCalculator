describe("StringCalculator", function() {

  beforeEach(function() {
    stringCalculator = new StringCalculator
  });

  describe("#caculate", function(){
    it('should return 0 if the method is not given any arguments', function(){
      expect(stringCalculator.calculate()).toEqual(0)
    });

    it('should return value if one argument is given', function(){
      stringCalculator.calculate("1")
      expect(stringCalculator.numbers).toEqual([1])
    });

    it('should return value if two argument is given', function(){
      stringCalculator.calculate("1","2")
      expect(stringCalculator.numbers).toEqual([1,2])
    });

  });

  describe("#sum", function(){
    it('should sum a random amount of arguments', function(){
      randomArray = (length, max) => [...new Array(length)]
      .map(() => Math.round(Math.random() * max));
      range = Math.floor((Math.random() * 100) + 1);
      res = randomArray(range,range);
      sum = res.reduce((pv, cv) => pv+cv, 0);
      expect(stringCalculator.checker(res)).toEqual(sum)
    });

    it('should sum numbers in array', function(){
      expect(stringCalculator.checker([1,2])).toEqual(3)
    });

    it('should eliminate spaces when adding the array ', function(){
      expect(stringCalculator.checker([1,'\n',2])).toEqual(3)
    });

    it('should stop working when there is a negative function ', function(){
      expect(stringCalculator.checker([1,'\n',-2])).toEqual('Sorry no negative numbers')
    });

    // it('should stop working when there is a symbol ', function(){
    //   expect(stringCalculator.checker(['/','/',2,'*'])).toEqual('//' + 2)
    // });

    it('should ignore numbers more than a 1000', function(){
      expect(stringCalculator.checker([1,1001])).toEqual(1)
    });
  });


});
