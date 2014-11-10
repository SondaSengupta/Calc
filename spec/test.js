/* global describe, it */

;(function(){
  'use strict';

  beforeEach(function(){
    $('#displayoutput').val('');
  });

  describe('Entering numbers', function(){

    describe('displayoutput', function(){
      it('should return the value of the display', function(){
        $('#displayoutput').val(1.23);
        assert.equal(displayOutput(), 1.23);

        $('#displayoutput').val(2.34);
        assert.equal(displayOutput(), 2.34);
      })
    })

    describe('press', function(){
      it('should display the number pressed', function(){
        assert.equal(displayOutput(), '');
        press(1);
        assert.equal(displayOutput(), 1);
      })
    })

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        press(7);
        press('.');
        press(8);
        press(9);
        assert.equal(displayOutput(), 7.89);
      });
    });
  });

  describe('Adding', function () {
    describe('7 . 8 9 + 1 + 2 =', function(){
      it('should be 10.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('+');
        press(1);
        press('+');
        press(2);
        press('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      it('should be 10.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('+');
        press(1);
        press('.');
        press(0);
        press(0);
        press('+');
        press(2);
        press('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        press(1);
        press('+');
        press(1);
        press('=');
        assert.equal(displayOutput(), '2');
      });
    });

    describe('. 1 + . 2 =', function(){
      it('should be 0.3', function () {
        press('.');
        press(1);
        press('+');
        press('.');
        press(2);
        press('=');
        assert.equal(displayOutput(), '0.3');
      });
    });

    describe('. 01 + . 02 =', function(){
      it('should be 0.03', function () {
        press('.');
        press(0);
        press(1);
        press('+');
        press('.');
        press(0);
        press(2);
        press('=');
        assert.equal(displayOutput(), '0.03');
      });
    });

    describe('. 9 + . 1 =', function(){
      it('should be 1', function(){
        press('.');
        press(9);
        press('+');
        press('.');
        press(1);
        press('=');
        assert.equal(displayOutput(), '1');
      });
    });
  });
   
  
  
  describe('Subtracting', function () {
    describe('7 . 8 9 - 1 - 2 =', function(){
      it('should be 4.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('-');
        press(1);
        press('-');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4.89');
      });
    });
    describe('7 . 8 9 - 1 . 0 0 - 2 =', function(){
      it('should be 4.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('-');
        press(1);
        press('.');
        press(0);
        press(0);
        press('-');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4.89');
      });
    });
    describe('1 - 1 =', function(){
      it('should be 0', function () {
        press(1);
        press('-');
        press(1);
        press('=');
        assert.equal(displayOutput(), '0');
      });
    });

    describe('. 2 - . 1 =', function(){
      it('should be 0.1', function () {
        press('.');
        press(2);
        press('-');
        press('.');
        press(1);
        press('=');
        assert.equal(displayOutput(), '0.1');
      });
    });

    describe('. 02 - . 01 =', function(){
      it('should be 0.01', function () {
        press('.');
        press(0);
        press(2);
        press('-');
        press('.');
        press(0);
        press(1);
        press('=');
        assert.equal(displayOutput(), '0.01');
      });
    });

    describe('1 . 1 - . 1 =', function(){
      it('should be 1', function(){
        press(1);
        press('.');
        press(1);
        press('-');
        press('.');
        press(1);
        press('=');
        assert.equal(displayOutput(), '1');
      });
    });

    describe('1 - 3 =', function(){
      it('should be -2', function(){
        press(1);
        press('-');
        press(2);
        press('=');
        assert.equal(displayOutput(), '-2');
      });
    });

      describe('5 * 4 =', function(){
      it('should be 20', function(){
        press(5);
        press('*');
        press(4);
        press('=');
        assert.equal(displayOutput(), '20');
      });
    });

        describe('20/5 =', function(){
      it('should be 4', function(){
        press(2);
        press(0);
        press('/');
        press(5);
        press('=');
        assert.equal(displayOutput(), '4');
      });
    });


  });
})();
