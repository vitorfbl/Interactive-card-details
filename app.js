const form = document.querySelector("form");

const cName = document.getElementById("name");
cName.addEventListener("input", updateTextName);

function updateTextName() {
    const text = document.getElementById("cName");
    text.innerHTML = cName.value;
    if (cName.value === ""){
        text.innerHTML = "Jane Appleseed"
    }
}
const cNmr = document.getElementById("nmr");
cNmr.addEventListener("input", updateTextNmr);

function updateTextNmr() {
    const text = document.getElementById("cNumber");
    text.innerHTML = cNmr.value;
    if (cNmr.value === ""){
        text.innerHTML = "0000 0000 0000 0000"
    }
}

cNmr.addEventListener("input", addSpaces);

function addSpaces() {
    let number = cNmr.value;
    number = number.replace(/[^\d]/g, "");
    let newNumber = "";
    while (number.length > 0) {
      newNumber += number.substring(0, 4) + " ";
      number = number.substring(4);
    }
    cNmr.value = newNumber.trim();
}

const monthInput = document.getElementById("dt1");
const yearInput = document.getElementById("dt2");
const dateParagraph = document.getElementById("cDate");

monthInput.addEventListener("input", updateDate);
yearInput.addEventListener("input", updateDate);

function updateDate() {
    dateParagraph.innerHTML = monthInput.value + "/" + yearInput.value;
    if (monthInput.value === "" && yearInput.value === ""){
        dateParagraph.innerHTML = "00/00"
    }
}

const cvc = document.getElementById("CVC");
cvc.addEventListener("input", updateTextCVC);

function updateTextCVC() {
    const text = document.getElementById("cCVC");
    text.innerHTML = cvc.value;
    if (cvc.value === ""){
        text.innerHTML = "000"
    }
}

function esconder(){
    if(cName.value !== ""  & cNmr.value !== ""  & cvc.value !== ""  & monthInput.value !== ""  & yearInput.value !== "" ){
        document.getElementById("form").classList.add("hidden");
        document.getElementById("end").classList.remove("hidden")
    }
   

}
function reset(){ 
        document.getElementById("end").classList.add("hidden");
        document.getElementById("form").classList.remove("hidden")

        cvc.value = ""
        monthInput.value ="" 
        yearInput.value = ""
        cName.value = ""
        cNmr = ""
}