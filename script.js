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

function handleImput(mask, key, arr){
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if(key == "backspace" && arr.lenght > 0){
        arr.pop();
        return
    }
    if(numbers.includes(key) && arr.lenght + 1 <= mask.lenght){
        if(mask[arr.lenght] === "-" || mask[arr.lenght] === "/ "){
            arr.push(mask[arr.lenght], key);
            console.log("entro");
            console.log(key);
        } else {
            arr.push(key);
            console.log("entro");
            console.log(key);
        }
    }
}

