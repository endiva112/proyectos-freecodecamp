const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;//La e esta puesta porque la gente podria introducir numeros elevados a 2e10 por ejemplo y eso no interesa
  //Esta i, permite que el regex funcione de forma no sensible a las mayusculas, por lo que se aplica para e y E
  //En los regex \d es equivalente a [0-9] (todos los números)
}