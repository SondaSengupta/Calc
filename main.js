function displayOutput(){
  return $('#displayoutput').val();
}

var prior = 0;

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      prior += +$('#displayoutput').val();

      // NEED TO DEAL WITH FLOATING POINT IMPRECISION
      // prior = (((prior * 10) + (+$('#displayoutput').val() * 10)) / 10);
      // ((prior * 10) + (+$('#displayoutput').val() * 10)) / 10;
      $('#displayoutput').val('');
      break;

    case '-':
      // handle -
      prior = prior - +$('#displayoutput').val();
      $('#displayoutput').val('');
      break;

    case '*':
      // handle *
      break;

    case '/':
      // handle /
      break;

    case 'C':
      // handle C
      break;

    case '=':
      prior += $('#displayoutput').val() * 1;
      $('#displayoutput').val(prior);
      prior = 0;
      break;

    case '+/-':
      // handle +/-
      break;

    default:
      var current =  $('#displayoutput').val();
      $('#displayoutput').val(current += buttonValue);
  }
}

// set prior = to buttonValue
  // multiply prior by 10
  // multiply next button press by 10
  //
