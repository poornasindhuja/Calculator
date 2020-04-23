let number1 = '';
let number2 = '';
let operator = '';
let total = '';
let isNumber1=true;
let refresh=false;
$(document).ready(function () {
    $('button').on('click', function (e) {
        let character = $(this).text();
        if(refresh){
            $("#display").animate({
                height: "50%"
              });
              $("#result").animate({
                height: "50%",
                color:'gray'
              });
              $('#result').text('');
            doRefresh=false;
        }
        if (character >= '0' && character <= '9') {
            setNumber(character);
            $('#display').append(character);
        } else if(character==='='){
            calculateTotal();
            displayResult();
        }else if(character=='CE'){
            setInitialState();
            setDisplay('');            
        }else {
            setOperator(character);
            $('#display').append(character);
        }
    });
});
function displayResult(){
    $("#display").animate({
        height: "0%"
      });
      $("#result").animate({
        height: "100%",
        opacity:1,
        color:'black'
      });
      setInitialState();
      refresh=true;
}
function setNumber(num) {
    if (isNumber1) {
        number1 =number1+ num;
    }
    else {
        number2 = number2+num;
    }
}
function setOperator(oper) {
    isNumber1=false;
    if (operator === '') {

        operator = oper;
    }
    else {
        calculateTotal();
        operator = oper;
    }
}
function calculateTotal() {
    switch (operator) {
        case '+': total = +number1 + +number2;
            break;
        case '-': total = +number1 - +number2;
            break;
        case '/': total = +number1 / +number2;
            break;
        case 'x': total = +number1 * +number2;
            break;
    }
    $('#result').text(total);
    updateVariables();
}
function setDisplay(value) {
    $('#display').text(value);
}
function updateVariables() {
    number1 = total;
    number2 = '';
}
function setInitialState(){
    number1='';
    number2='';
    isNumber1=true;
    total='';
    operator='';
    setDisplay('');
}