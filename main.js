  function displayOutput(){
    return $('#displayoutput').val();
  }

  function press(buttonValue){
    if ( ["+", "-", "*", "/", "=", "C", "+/-"].indexOf(buttonValue) !== -1 ) {
      // handle operators
    } else {
    var current = $('#displayoutput').val();
    $('#displayoutput').val(current += buttonValue);
    }
    
  }
