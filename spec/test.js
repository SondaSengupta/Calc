/* global describe, it */

;(function () {
  'use strict';
    
  
  beforeEach(function(){
    $('#displayoutput').val("");
  });


  describe('Entering numbers', function(){

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        press('7');
        press('.');
        press('8');
        press('9');
        it('should be 7.89', function () {
          assert.equal(displayOutput(), "10.89");
        });
      });
    });
  });

  describe('Adding', function () {
    describe('7 . 8 9 + 1 + 2 =', function(){
      press('7');
      press('.');
      press('8');
      press('9');
      press('+');
      press('1');
      press('+');
      press('2');
      press('=');
      it('should be 10.89', function () {
        assert.equal(displayOutput(), "10.89");
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      press('7');
      press('.');
      press('8');
      press('9');
      press('+');
      press('1');
      press('.');
      press('0');
      press('0');
      press('+');
      press('2');
      press('=');
      it('should be 10.89', function () {
        assert.equal(displayOutput(), "10.89");
      });
    });
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        assert.equal(false);
      });
    });
    describe('. 9 + . 1 =', function(){
      it('should be 1', function () {
        assert.equal(false);
      });
    });
  });
})();
