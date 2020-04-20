let number1 = '';
let number2 = '';
let operator = '';
let total = '';
let isNumber1=true;
let refresh=false;
$(document).ready(function () {
    $('button').on('click', function (e) {
        let btn = e.target.innerHTML;
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
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
            $('#display').append(btn);
        } else if(btn==='='){
            handleTotal();
            displayResult();
        }else if(btn=='CE'){
            setInitialState();
            displayButton('');            
        }else {
            handleOperator(btn);
            $('#display').append(btn);
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
function handleNumber(num) {
    if (isNumber1) {
        number1 =number1+ num;
    }
    else {
        number2 = number2+num;
    }
}
function handleOperator(oper) {
    isNumber1=false;
    if (operator === '') {

        operator = oper;
    }
    else {
        handleTotal();
        operator = oper;
    }
}
function handleTotal() {
    switch (operator) {
        case '+': total = +number1 + +number2;
            break;
        case '-': total = +number1 - +number2;
            break;
        case '/': total = +number1 / +number2;
            break;
        case 'X': total = +number1 * +number2;
            break;
    }
    $('#result').text(total);
    updateVariables();
}
function displayButton(value) {
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
    displayButton('');
}