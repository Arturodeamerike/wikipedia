document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

// Buscador de contenido

// Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

// Declarando variables
const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const box_search = document.getElementById("box-search");

// Función para mostrar el buscador
function mostrar_buscador() {
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === "") {
        box_search.style.display = "none";
    }
}

// Función para ocultar el buscador
function ocultar_buscador() {
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";
}

// Creando filtrado de búsqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    const filter = inputSearch.value.toUpperCase();
    const li = box_search.getElementsByTagName("li");

    let hasResults = false;

    // Recorriendo elementos a filtrar mediante los "li"
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            hasResults = true;
        } else {
            li[i].style.display = "none";
        }
    }

    if (hasResults) {
        box_search.style.display = "block";
    } else {
        box_search.style.display = "none";
        // Puedes mostrar un mensaje predeterminado aquí si no hay resultados
        // alert("No se encontraron resultados"); // Opcional
    }
}

// Asegurarse de que al hacer clic en los enlaces de la búsqueda no haya errores
document.getElementById("box-search").addEventListener("click", function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetUrl = event.target.getAttribute("href");
        if (targetUrl) {
            window.location.href = targetUrl;
            ocultar_buscador();
        } else {
            console.error("URL objetivo no encontrado:", targetUrl);
        }
    }
});
