const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

//Funcion 
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
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const add_fees = document.getElementById('add_fees');

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
let valid_date = false;
let link_pay_card = document.getElementById('link_pay_card');
let card_image = document.getElementById('card_image');
let payment_fees = document.getElementById('payment_fees');

//Listener de Card
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

//Listener carga de cuotas
payment_fees.addEventListener("click", function() {
    var options = document.getElementById('payment_fees').options;
    console.log(options.selectedIndex);
    switch (options.selectedIndex) {
        case 1:
            console.log("caso 1 cuota");
            var saludo = document.createTextNode("hola como va");
            add_fees.appendChild(saludo);
            break;
        case 2:
            console.log("caso 3 cuotas");
            break
        case 3:
            console.log("caso 6 cuotas");
            break
        case 4:
            console.log("caso 9 cuotas");
            break
    }
});


//Funcion de carga card en modal
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
    if(arr==dateNumber){
        while(!validar_date()){
            handleImput(maskCVV, e.key, cvvNumber);
            inputCVV.value = cvvNumber.join("");
        }
    }
    if(inputCard.value.length === 19 && inputDate.value.length === 4){
        girar();
    }
    if(inputCVV.value.length === 2){
        girar();
        cerrarModal();
        link_pay_card.innerHTML = "Mastercard";
        let image = src="./img/Mastercard-logo.png"
        card_image.src = image;
    }
}

function validar_date() {
    date = [];
    date = dateNumber.join("");
    let month = date[0] + date[1];
    if(!(month < 1 || month > 12)){
        valid_date = true;
        console.log(valid_date);
    }
    return valid_date;
}

function girar() {
    front.classList.toggle('is-flipped');
    back.classList.toggle('is-flipped');
}

function cerrarModal() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })  
      Toast.fire({
        icon: 'success',
        title: 'Guardando Tarjeta'
      })
      setTimeout(() => {
        closeModal();
      }, 3000);
}

