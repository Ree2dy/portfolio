function copyEmail() {
    navigator.clipboard.writeText("oliverreedy0@gmail.com").then(() => {
    alert("Email copied to clipboard!");
    });
}


window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { /* increase number to change when bar disappears*/
    navbar.classList.add("scrolled");
    } else {
    navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
const canvas = document.getElementById("ant-preview");
const ctx = canvas.getContext("2d");
const size = 10;
const cellSize = canvas.width / size;

let grid = Array.from({ length: size }, () => Array(size).fill(0));
let x = Math.floor(size / 2);
let y = Math.floor(size / 2);
let dir = 0; // 0: up, 1: right, 2: down, 3: left

function step() {
    const state = grid[y][x];
    grid[y][x] = state === 0 ? 1 : 0;

    ctx.fillStyle = grid[y][x] === 1 ? "#fff" : "#333";
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

    dir = (dir + (state === 0 ? 1 : -1) + 4) % 4;

    if (dir === 0) y--;
    else if (dir === 1) x++;
    else if (dir === 2) y++;
    else if (dir === 3) x--;

    // Wrap
    x = (x + size) % size;
    y = (y + size) % size;
}

// Initialize canvas
ctx.fillStyle = "#333";
ctx.fillRect(0, 0, canvas.width, canvas.height);

setInterval(step, 50);
});
