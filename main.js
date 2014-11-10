function displayOutput(){
  return $('#displayoutput').val();
}

var prior = 0;

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      prior += +$('#displayoutput').val() * 1;

      // NEED TO DEAL WITH FLOATING POINT IMPRECISION
      // prior = (((prior * 10) + (+$('#displayoutput').val() * 10)) / 10);
      // ((prior * 10) + (+$('#displayoutput').val() * 10)) / 10;
      $('#displayoutput').val('');
      break;

    case '-':
      // handle -
      if (prior === 0){ // anything subtracted from prior of zero will be negative otherwise
        prior = +$('#displayoutput').val();
      } else {
        prior = prior - +$('#displayoutput').val();
      }
      $('#displayoutput').val('');

      break;

    case '*':
      // handle *
      if (prior === 0){ // anything multiplied by prior of zero will be zero otherwise 
        prior = +$('#displayoutput').val();
      } else {
        prior = prior * +$('#displayoutput').val();
      }
      $('#displayoutput').val('');
      break;

    case '/':
      // handle /
      if (prior === 0){ // anything multiplied by prior of zero will be zero otherwise 
        prior = +$('#displayoutput').val();
      } else {
        prior = prior / +$('#displayoutput').val();
      }
      $('#displayoutput').val('');
      break;

    case 'C':
      // handle C
      $('#displayoutput').val(0);
      prior = 0;

      break;

    case '=': //must fix equal to reflect operator used
      prior /= $('#displayoutput').val() * 1;
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
