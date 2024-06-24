generateEmail();

function generateEmail() { 
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const letra1 = letras.charAt(Math.floor(Math.random() * letras.length));
    const letra2 = letras.charAt(Math.floor(Math.random() * letras.length));
    const numero = Math.floor(Math.random() * 90) + 10;
    const cadenaAleatoria = letra1 + letra2 + '********' + numero;
    document.getElementById('email').textContent = cadenaAleatoria +'@gmail.com';
    return cadenaAleatoria;
}
