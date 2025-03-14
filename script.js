document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Ustawienia planszy
    canvas.width = 800;
    canvas.height = 600;

    // Gracz
    const player = {
        x: canvas.width / 2, // Środek ekranu
        y: canvas.height / 2,
        size: 30, // Wielkość gracza
        color: "blue",
        speed: 5, // Prędkość ruchu
        dx: 0,
        dy: 0
    };

    // Rysowanie planszy
    function drawBackground() {
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Rysowanie gracza
    function drawPlayer() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    // Ruch gracza
    function movePlayer() {
        player.x += player.dx;
        player.y += player.dy;

        // Ograniczenia, żeby nie wychodzić poza planszę
        if (player.x < 0) player.x = 0;
        if (player.y < 0) player.y = 0;
        if (player.x + player.size > canvas.width) player.x = canvas.width - player.size;
        if (player.y + player.size > canvas.height) player.y = canvas.height - player.size;
    }

    // Obsługa klawiatury
    function keyDown(e) {
        if (e.key === "ArrowRight") player.dx = player.speed;
        if (e.key === "ArrowLeft") player.dx = -player.speed;
        if (e.key === "ArrowDown") player.dy = player.speed;
        if (e.key === "ArrowUp") player.dy = -player.speed;
    }

    function keyUp(e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") player.dx = 0;
        if (e.key === "ArrowDown" || e.key === "ArrowUp") player.dy = 0;
    }
