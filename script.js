console.log("iniciando...");
document.addEventListener('DOMContentLoaded', function() {
    var h1Um = document.querySelector("#h1Um");
    var pUmButton = document.querySelector("#pUmb");
    var pUm = document.querySelector("#pUm");

    if (h1Um) {
        h1Um.innerHTML = '';
    }
    if (pUm) {
        pUm.innerHTML = '';
    }

    const firstText = "Oi bom(a) dia/tarde/noite, esse e meu primeiro site html publicado!!! (e so isso o site BRUH)";
    const writeInterval = 300;

    function showText1(h1Um, firstText, writeInterval) {
        const char = firstText.split("").reverse();
        const typer = setInterval(() => {
            if (!char.length) {
                return clearInterval(typer);
            }
            const nextL = char.pop();
            h1Um.innerHTML += nextL;
        }, writeInterval);
    }
    showText1(h1Um, firstText, writeInterval);
})