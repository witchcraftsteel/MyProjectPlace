
var inputnum1 = document.getElementById('inputnum1');
var inputnum2 = document.getElementById('inputnum2');

var mathoperations = document.getElementsByClassName('buttonOp');

function makeOperation(operationCode) {
    var Number1 = Number(inputnum1.value);
    var Number2 = Number(inputnum2.value);
    if (operationCode === '+') {
        var result = Number1 + Number2;
    } else if (operationCode === '-') {
        var result = Number1 - Number2;
    } else if (operationCode === '*') {
        var result = Number1 * Number2;
    } else if (operationCode === '/') {
        var result = Number1 / Number2;
    } else {
        window.alert('Error');
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation); 
}

for (var i = 0; i < mathoperations.length; i++) {
    var button= mathoperations[i];
    button.addEventListener('click', onOperationButtonClick);    
}

