const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

/*Card Mask*/

const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
let valid_date = false;

inputCard.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();

    handleImput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join("");
    
});

inputDate.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();

    handleImput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
});

inputCVV.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();
    handleImput(maskCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
   
});

function handleImput(mask, key, arr){
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(key === "Backspace" && arr.length > 0){
        arr.pop();
        return
    }
    if(numbers.includes(key) && ((arr.length + 1) <= mask.length)){
        if(mask[arr.length] === "-" || mask[arr.length] === "/"){
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
        }
    }
}

function validar_date() {
    date = [];
    date = dateNumber.join("");
    var month = date[0] + date[1];
    if(!(month < 01 || month > 12)){
        valid_date = true;
    }
}



//  const card = document.querySelector('.card')

//  card.addEventListener('click', function () {
//      card.classList.toggle('is-flipped');
//  });
