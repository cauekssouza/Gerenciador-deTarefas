document.addEventListener("DOMContentLoaded", () => {
    const teste = document.getElementById("teste") as HTMLInputElement;
    const testeBtn = document.getElementById("testeBtn") as HTMLButtonElement;
    const testeLista = document.getElementById("testeLista") as HTMLUListElement;

    function addTeste(): void {
        const testeTexto: string = teste.value.trim();
        if (testeTexto === "") return;

        const li = document.createElement("li"); 
        li.textContent = testeTexto;

        const remover = document.createElement("button");
        remover.textContent = "Remover";
        remover.addEventListener("click", () => li.remove());

        li.appendChild(remover);
        testeLista.appendChild(li);

        teste.value = ""; 
        teste.focus(); 
    }

    
    testeBtn.addEventListener("click", addTeste);

    
    teste.addEventListener("keypress", (event: KeyboardEvent) => {
        if (event.key === "Enter") addTeste();
    });
});
