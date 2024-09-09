var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMult = document.getElementById('buttonMult');
var buttonDisc = document.getElementById('buttonDisc');

function onButtonPlusClic() {
    var inputnum1 = document.getElementById('inputnum1');
    var inputnum2 = document.getElementById('inputnum2');
    var numvalue1 = Number(inputnum1.value);
    var numvalue2 = Number(inputnum2.value);
    var summa = numvalue1 + numvalue2;
    alert(summa);
}
function onButtonMinusClic() {
    var inputnum1 = document.getElementById('inputnum1');
    var inputnum2 = document.getElementById('inputnum2');
    var numvalue1 = Number(inputnum1.value);
    var numvalue2 = Number(inputnum2.value);
    var vychitanye = numvalue1 - numvalue2;
    alert(vychitanye);
}
function onButtonMultClic() {
    var inputnum1 = document.getElementById('inputnum1');
    var inputnum2 = document.getElementById('inputnum2');
    var numvalue1 = Number(inputnum1.value);
    var numvalue2 = Number(inputnum2.value);
    var multipl = numvalue1 * numvalue2;
    alert(multipl);
}
function onButtonDiscClic() {
    var inputnum1 = document.getElementById('inputnum1');
    var inputnum2 = document.getElementById('inputnum2');
    var numvalue1 = Number(inputnum1.value);
    var numvalue2 = Number(inputnum2.value);
    var discT = numvalue1 / numvalue2;
    alert(discT);
}

buttonPlus.addEventListener('click', onButtonPlusClic);
buttonMinus.addEventListener('click', onButtonMinusClic);
buttonMult.addEventListener('click', onButtonMultClic);
buttonDisc.addEventListener('click', onButtonDiscClic);