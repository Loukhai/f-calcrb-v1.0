"use strict";

//Variables

const display = document.querySelector(".input");
const btnEqual = document.getElementById("btnEqual");
const btnClear = document.getElementById("btnClear");

//function to read the value from the keys and write in display
function read(i) {
  //let result = eval(display.textContent);
  if (display.textContent === "0") {
    display.textContent = i;
  } else {
    /* if (display.textContent === result) {
      display.textContent = i;
  } */
    display.textContent += i;
  }
}

btnEqual.onclick = function () {
  let operation = display.textContent;

  display.textContent = eval(operation);
  /* if(operation !== Error){
    //eval...
  }else{
    display.textContent = "Err!"
  } */
};

const btnRemove1Caractr = document.getElementById("btnRemove1Caractr");

btnRemove1Caractr.onclick = () => {
  /* let lengthDisplay = display.textContent.length;
  let newDisplay = display.textContent.substring(0, lengthDisplay - 1);
  display.textContent = newDisplay;
  console.log(display.textContent.substring(0, lengthDisplay - 1)); */

  //let lengthDisplay = display.textContent.length;
  let newDisplay = display.textContent.slice(0, -1);
  display.textContent = newDisplay;
  console.log(newDisplay);
};

const btnMR = document.getElementById("btnMR");
const btnMAdd = document.getElementById("btnMAdd");
const btnMRemove = document.getElementById("btnMRemove");
const btnMC = document.getElementById("btnMC");

btnMAdd.onclick = () => {
  localStorage.setItem("MR", display.textContent);
};

btnMR.onclick = () => {
  if (display.textContent !== "") {
    display.textContent += localStorage.getItem("MR"); //
  } else {
    display.textContent = localStorage.getItem("MR");
  }

  let remember = localStorage.getItem("MR");
  if (remember === null) {
    alert("! لا توجد أي قيمة محفوظة "); //alert Remember vide
    /*     display.textContent += localStorage.setItem("ntn", "0"); // TODO1 :  null value GIVE him more work
     */
  }
};

btnMRemove.onclick = () => {
  localStorage.removeItem("MR", display.textContent);
};
btnMC.onclick = () => {
  localStorage.clear();
};

btnClear.onclick = function () {
  display.textContent = "0";
};
