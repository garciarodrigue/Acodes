var iframe = document.getElementById('chatform');

// Escuchar mensajes del iframe
window.addEventListener('message', function(event) {
    if (event.origin === '') {
        // Realizar acciones basadas en el mensaje recibido
        console.log('Mensaje recibido desde el iframe:', event.data);
    }
});

// Enviar mensaje al iframe
function enviarMensajeAlIframe(mensaje) {
    iframe.contentWindow.postMessage(mensaje, 'https://hack.chat/?fashion');

document.getElementById('searchInput').addEventListener('click', function() {
    var hiddenDiv = document.getElementById("chatIframe");
    hiddenDiv.classList.toggle('hidden');
});
}