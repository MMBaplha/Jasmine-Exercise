describe("calculateMonthlyPayment", function() {
    it("should calculate the monthly payment correctly", function() {
      const values = {
        amount: 10000,
        years: 8,
        rate: 5.8
      };
      expect(calculateMonthlyPayment(values)).toEqual("130.44");
    });

    it("should return a result with 2 decimal places", function() {
      const values = {
        amount: 10043,
        years: 8,
        rate: 5.8
      };
      expect(calculateMonthlyPayment(values)).toEqual("131.00");
    });

    it("should handle terribly high interest rates", function() {
      const values = {
        amount: 1000,
        years: 40,
        rate: 99
      };
      expect(calculateMonthlyPayment(values)).toEqual("82.50");
    });

    it("should handle zero interest rates", function() {
      const values = {
        amount: 10000,
        years: 10,
        rate: 0
      };
      expect(calculateMonthlyPayment(values)).toEqual("83.33"); // 10000 / (10 * 12) = 83.33
    });

    it("should handle a loan amount of zero", function() {
      const values = {
        amount: 0,
        years: 10,
        rate: 5.8
      };
      expect(calculateMonthlyPayment(values)).toEqual("0.00");
    });

    it("should handle very low loan amounts and terms", function() {
      const values = {
        amount: 1,
        years: 1,
        rate: 5.8
      };
      expect(calculateMonthlyPayment(values)).toEqual("0.09"); // Monthly payment for a $1 loan over 1 year at 5.8%
    });
  });
