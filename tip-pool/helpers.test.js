describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function() {
      // Set up the initial state
      allPayments = {
        payment1: { billAmt: '100', tipAmt: '15', tipPercent: '15' },
        payment2: { billAmt: '200', tipAmt: '30', tipPercent: '15' }
      };
    });
  
    // Test for sumPaymentTotal()
    it('should correctly sum total of tipAmt from allPayments', function() {
      let totalTip = sumPaymentTotal('tipAmt');
  
      expect(totalTip).toEqual(45); // 15 + 30 = 45
    });
  
    it('should correctly sum total of billAmt from allPayments', function() {
      let totalBill = sumPaymentTotal('billAmt');
  
      expect(totalBill).toEqual(300); // 100 + 200 = 300
    });
  
    it('should correctly sum total of tipPercent from allPayments', function() {
      let totalTipPercent = sumPaymentTotal('tipPercent');
  
      expect(totalTipPercent).toEqual(30); // 15 + 15 = 30
    });
  
    // Test for calculateTipPercent()
    it('should correctly calculate tip percent', function() {
      let tipPercent = calculateTipPercent(100, 15);
  
      expect(tipPercent).toEqual(15); // Tip percent for a $100 bill and $15 tip
    });
  
    // Test for appendTd()
    it('should append a new td element with value to a tr element', function() {
      let newTr = document.createElement('tr');
      
      appendTd(newTr, 'Test Value');
  
      expect(newTr.children.length).toEqual(1); // Should have 1 td element
      expect(newTr.children[0].innerText).toEqual('Test Value'); // Content should be 'Test Value'
    });
  
    afterEach(function() {
      // Clean up
      allPayments = {};
    });
  });  