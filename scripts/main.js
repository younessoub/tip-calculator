//importing dom selectors
import {
  form, 
  resetButton,
} from "./dom.js";
//importing functions
import { handleFormChange, reset } from "./functions.js";

form.addEventListener('input', handleFormChange);

resetButton.addEventListener('click', reset);