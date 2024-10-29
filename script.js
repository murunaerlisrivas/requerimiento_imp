document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll("tbody tr.feature");

    rows.forEach(row => {
        const despCell = row.querySelector("td.desp.border");
        if (!despCell || !despCell.textContent.trim()) {
            row.style.display = "none"; // Oculta la fila si la celda está vacía
        }
    });
});