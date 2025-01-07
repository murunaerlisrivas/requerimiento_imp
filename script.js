document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("tbody tr.feature");

    rows.forEach(row => {
        const despCell = row.querySelector("td.desp.border");
        if (!despCell || (!despCell.textContent.trim() && !despCell.querySelector("div"))) {
            row.style.display = "none"; // Oculta la fila si la celda está vacía
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".logoTable");
    const headers = table.querySelectorAll("thead th");
    const rows = table.querySelectorAll("tbody tr");

    // Ocultar inicialmente todas las columnas
    headers.forEach(header => {
        header.style.display = "none";
    });

    rows.forEach(row => {
        Array.from(row.children).forEach(cell => {
            cell.style.display = "none";
        });
    });

    // Verificar cada columna y activarla si tiene contenido
    for (let colIndex = 0; colIndex < headers.length; colIndex++) {
        let hasContent = false; // Asumimos que la columna está vacía

        // Verificar contenido en las celdas de la columna actual
        for (let row of rows) {
            const cell = row.children[colIndex];
            if (cell && cell.textContent.trim() !== "") {
                hasContent = true; // Encontramos contenido
                break; // Salimos del bucle
            }
        }

        // Mostrar la columna si tiene contenido
        if (hasContent) {
            headers[colIndex].style.display = ""; // Mostrar encabezado
            rows.forEach(row => {
                const cell = row.children[colIndex];
                if (cell) {
                    cell.style.display = ""; // Mostrar celdas de la columna
                }
            });
        }
    }
});
