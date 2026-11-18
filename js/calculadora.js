console.log("JS carregou");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const resultado = document.getElementById("resultado");
const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

const mostrar = (conta) => {
    resultado.textContent = `Resultado: ${conta}`;
};

somar.addEventListener("click", () => {
    mostrar(Number(n1.value) + Number(n2.value));
});
subtrair.addEventListener("click", () => {
    mostrar(Number(n1.value) - Number(n2.value));
});
multiplicar.addEventListener("click", () => {
    mostrar(Number(n1.value) * Number(n2.value));
});
dividir.addEventListener("click", () => {
    if (Number(n2.value) === 0) {
        resultado.textContent = "Resultado: Não é possível dividir por zero!";
        return;
    } else {
        mostrar(Number(n1.value) / Number(n2.value));
    }
});