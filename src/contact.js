let newBox = document.querySelector('#oProblem');
newBox.onclick = function() {
  let divCreator = document.createElement('div');
  divCreator.setAttribute('id', 'orderText');
  let labelCreator = document.createElement('label');
  labelCreator.setAttribute('for', 'orderNum');
  labelCreator.innerText = 'Order Number: ';
  let inputCreator = document.createElement('input');
  inputCreator.setAttribute('type', 'number');
  inputCreator.setAttribute('name', 'orderNum');
  inputCreator.setAttribute('class', 'orderNum');
  let radioSelector = document.querySelector('#radios');
  divCreator.appendChild(labelCreator);
  divCreator.appendChild(inputCreator);
  radioSelector.appendChild(divCreator);
};

let removeCom = document.querySelector('#comment');
removeCom.onclick = function() {
  let box = document.querySelector('#orderText');
  box.remove();
};
let removeQue = document.querySelector('#question');
removeQue.onclick = function() {
  let box = document.querySelector('#orderText');
  box.remove();
};
