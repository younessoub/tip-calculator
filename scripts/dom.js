const form = document.querySelector('.form');
const billInput = document.querySelector('#billInput');
const tipInputs = document.querySelectorAll('input[name="tip"]');
const customTip = document.querySelector('#customInput')
const peopleInput = document.querySelector('#peopleInput');
const tipPerPerson = document.querySelector('#tipPerPerson');
const tipTotal = document.querySelector('#tipTotal');
const resetButton = document.querySelector('.resultWrap button')

export {
  form, 
  billInput,
  tipInputs,
  customTip,
  peopleInput,
  tipPerPerson,
  tipTotal,
  resetButton
};