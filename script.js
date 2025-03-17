document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("tbody tr.feature");

    rows.forEach(row => {
        const despCell = row.querySelector("td.desp.border");
        if (!despCell) return;

        const cellText = despCell.textContent.trim();

        if (cellText === "" || cellText === "0") {
            row.style.display = "none";
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

document.addEventListener("DOMContentLoaded", function () {
    let cantidadLogos = parseInt(document.querySelector(".cantidad-logos")?.innerText.trim() || 0);
    let tabla = document.querySelector(".logoTable");
    if (cantidadLogos === 0) {
        tabla.style.display = "none";
    }
});

// Selecciona los elementos de prioridad y fecha
let prioridadSpan = document.getElementById("prioridadSpan");
let fechaSpan = document.getElementById("fechaSpan");
let prioridadDiv = document.getElementById("prioridadDiv");
let fechaDiv = document.getElementById("fechaDiv");

let prioridad = prioridadSpan.textContent.trim();
let fecha = fechaSpan.textContent.trim();

let valoresUrgentes = ["Urgente", "Urgent", "緊迫的"];

if (valoresUrgentes.includes(prioridad)) {
    prioridadSpan.className = "redColor";
    fechaSpan.className = "redColor";
} else {
    prioridadSpan.className = "normal";
    fechaSpan.className = "normal";
}


if (!prioridad) {
    prioridadDiv.style.display = "none";
}

if (!fecha) {
    fechaDiv.style.display = "none";
}
