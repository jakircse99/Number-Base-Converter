// Select all html element in variable by id

let inputNumber = document.querySelector("#input-number");
let binary = document.querySelector("#binary");
let octal =document.querySelector("#octal");
let hexadecimal = document.querySelector("hexadecimal");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");




btn.addEventListener('click', () =>{
  
  let select = document.querySelector("#select").value; //Get select > option value
  let inputNumberNew = parseInt(inputNumber.value); // Convert string numeric number to integer number
  
  // condition for Binary, Octal, Hexadecimal
  if (inputNumber.value == "") {
    alert ("Please enter a number")
  }else {
    result.style = "visibility: visible;"; // Result visibility to visible

    if (select == "Binary") {
      let binaryNumber = inputNumberNew.toString(2); // for binary converson
      result.textContent= binaryNumber;
    }else if (select == "Octal") {
      let octalNumber = inputNumberNew.toString(8); // for octal converson
      result.textContent= octalNumber;
    } else if (select == "Hexadecimal") {
      let octalNumber = inputNumberNew.toString(16);  // for hexadecimal converson
      result.textContent= octalNumber;
    }else {
      alert ("Please select a option");
    }
  }
  

});