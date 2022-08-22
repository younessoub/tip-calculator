import { 
  form,
  billInput, 
  customTip, 
  peopleInput, 
  tipInputs,
  tipTotal,
  tipPerPerson 
} from "./dom.js";


function handleFormChange(){
  let bill = billInput.value;
  let tip ;
  let people = peopleInput.value;
  tipInputs.forEach((tipInput) => {
    if(tipInput.checked){
      if(tipInput.value === "custom"){
        tip = customTip.value;
      }else{
        tip = tipInput.value;
      }
    }
  })
  
  //checking if inputs are filled
  if(bill>0 && tip>=0 && people>0){
    calculate(bill, tip, people);
  }
}

function calculate(bill, tip, people){
  let perPersonTip = Number((bill * (tip/100))/people);
  perPersonTip = perPersonTip.toFixed(2);
  let totalPerPerson = Number((bill / people) + Number(perPersonTip));
  totalPerPerson = totalPerPerson.toFixed(2);
  showBill(perPersonTip, totalPerPerson);
}

function showBill(perPersonTip, totalPerPerson){
  tipPerPerson.innerText = perPersonTip;
  tipTotal.innerText = totalPerPerson; 
}

function reset(){
  form.reset();
  tipTotal.innerText = "0.00";
  tipPerPerson.innerText = "0.00";
}

export {handleFormChange, reset};