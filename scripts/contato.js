const NUMERO_CELULAR = "5521973017752";

function sendMessageToWhatsapp() {
    const holdMessage = document.getElementById("mensagem-whatsapp").value;
    const message = window.encodeURIComponent(holdMessage);
    
    return window.open('https://wa.me/' + NUMERO_CELULAR
        + '?text=%20' + message);
}
