document.addEventListener("DOMContentLoaded", function () {
    var teste = document.getElementById("teste");
    var testeBtn = document.getElementById("testeBtn");
    var testeLista = document.getElementById("testeLista");
    function addTeste() {
        var testeTexto = teste.value.trim();
        if (testeTexto === "")
            return;
        var li = document.createElement("li");
        li.textContent = testeTexto;
        var remover = document.createElement("button");
        remover.textContent = "Remover";
        remover.addEventListener("click", function () { return li.remove(); });
        li.appendChild(remover);
        testeLista.appendChild(li);
        teste.value = "";
        teste.focus();
    }
    testeBtn.addEventListener("click", addTeste);
    teste.addEventListener("keypress", function (event) {
        if (event.key === "Enter")
            addTeste();
    });
});
