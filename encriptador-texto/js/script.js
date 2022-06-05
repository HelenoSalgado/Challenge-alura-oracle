const body = document.querySelector("body");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const buttonInput = document.querySelector("#button-input");
const buttonOutPut = document.querySelector("#button-output");
const buttonIconLockOpen = document.querySelector("#button-input i");
const buttonIconLock = document.querySelector("#button-output i");


buttonInput.addEventListener("click",() =>{
    loading();
    setTimeout(() => {
        output.innerText = encrypt(input.value.toLowerCase());
        animationInput();
    }, 1000);  
})

buttonOutPut.addEventListener("click",() =>{
    loading();
    setTimeout(() => {
        output.innerText = decrypt(output.value);
        AnimationOutput();
    }, 1000);  
})

function loading(){
    let loading = document.createElement("span");
    loading.classList.add("loading"); 
    body.appendChild(loading);
    setTimeout(() => {
        loading.classList.remove("loading")
    }, 1000);
}
function encrypt(stringInput){
    let matrixCode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    for(var i = 0; i < matrixCode.length; i++){
        if(stringInput.includes(matrixCode[i][0])){
            textEncrypted = stringInput.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return textEncrypted;
}

function decrypt(stringOutput){
    let matrixCode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    for(var i = 0; i < matrixCode.length; i++){
        if(stringOutput.includes(matrixCode[i][0])){
            textDecrypt = stringOutput.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return textDecrypt;
}

function animationInput(){
    buttonIconLockOpen.classList.remove("fa-lock-open");
    buttonIconLock.classList.remove("fa-lock-open")
    buttonIconLockOpen.classList.add("fa-lock");
}

function AnimationOutput(){
    buttonIconLockOpen.classList.remove("fa-lock-open");
    buttonIconLock.classList.add("fa-lock-open");
    buttonIconLockOpen.classList.remove("fa-lock");
}

function mouseFocus(e){
    var x = e.pageX - output.offsetLeft;
    var y = e.pageY - output.offsetTop;

    if((x > 270 && y > 108) && (y < 160)){
       output.style.cursor = "crosshair";
       output.onclick = copy;  
    }else{
       output.style.cursor = "auto";
    }
} 

function copy(event){
    var x = event.pageX - output.offsetLeft;
    var y = event.pageY - output.offsetTop;

    if((x > 270 && y > 108) && (y < 160)){
       output.select();
       output.setSelectionRange(0, 99999);
       navigator.clipboard.writeText(output.value); 

       message();
    }  
}

function message(){
    let message = document.createElement("em");
    message.innerText = "Texto copiado com sucesso!";
    body.appendChild(message);
    message.classList.add("message");
    
       setTimeout(() => {
          body.appendChild(message).remove();
          location.reload();
       }, 2000);
}
  