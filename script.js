const titulo = document.querySelector(".maquina-escrever");

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
        elemento.innerHTML += letra;
        }, 100 * i);
    });
}
typeWrite(titulo);

const sr = ScrollReveal({
    origin: "top",
    distance: "70px",
    duration: 2000,
  });
  
sr.reveal(".sobre-mim-text-box", { delay: 400 });
sr.reveal(".sobre-mim-img", { delay: 200 });
sr.reveal(".sr-apresentacao", { delay: 300 });