const surpriseButton = document.getElementById("surpriseButton");

function createRose() {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.textContent = "🌹"; // Emoji de rosa
    rose.style.left = Math.random() * 100 + "vw"; // Posiciona em locais aleatórios no topo
    rose.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duração aleatória
    document.body.appendChild(rose);

    // Remove a rosa após a animação
    setTimeout(() => {
        rose.remove();
    }, 5000);
}

surpriseButton.addEventListener("click", () => {
    setInterval(createRose, 300); // Cria rosas a cada 300ms
});
