document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Ustawienia planszy
    canvas.width = 800;
    canvas.height = 600;

    // Rysowanie tła gry
    function drawBackground() {
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Główna pętla gry
    function gameLoop() {
        drawBackground();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
