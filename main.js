const wrapper = document.querySelector(".wrapper"),
qrI = wrapper.querySelector(".form input"),
gerarB = wrapper.querySelector(".form button"),
qrIMG = wrapper.querySelector(".QRCode img");
let preValue;

gerarB.addEventListener("click", () => {
    let qrValue = qrI.value.trim()
    if(!qrValue || preValue ===qrValue) return;
    preValue=qrValue;
    gerarB.innerText = "Gerando QR Code..."
    qrIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrIMG.addEventListener("load",() => {
        wrapper.classList.add("active");
        gerarB.innerText="Gerado"
    })
})
qrI.addEventListener("keyup",() => {
    if(!qrI.value.trim()){
        wrapper.classList.remove("active")
        preValue=""
    }
})
