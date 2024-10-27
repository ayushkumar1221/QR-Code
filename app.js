const button = document.getElementById("btn");

button.addEventListener("click", function(){
    let userInput = document.getElementById("input-text").value;
    
    let qrCode = new QRCode("qrcode");

    qrCode.makeCode(userInput);
    
})


