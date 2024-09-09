function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}
function addErrorClassToAll() {
    addErrorClass('firstName');
    addErrorClass('lastName');
    addErrorClass('address');
}

// window.setTimeout(addErrorClassToAll, 2000);

var sendButton = document.getElementById('knopka');
sendButton.addEventListener('click', addErrorClassToAll);

function onFirstNameKeyUp() {
    addErrorClass('firstName');
}
var keyUpFirstName = document.getElementById('firstName');
keyUpFirstName.addEventListener('keyup', onFirstNameKeyUp);