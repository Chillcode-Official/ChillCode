document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});
function toggleDropdown(button) {
    let dropdown = button.nextElementSibling;
    dropdown.classList.toggle("show");

    // zamknij wszystkie otwarte dropdowny
    let dropdowns = document.querySelectorAll(".dropdown-content.show");
    dropdowns.forEach(function(d) {
        if (d !== dropdown) {
            d.classList.remove("show");
        }
    });
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-text-container')) {
        let dropdowns = document.querySelectorAll(".dropdown-content.show");
        dropdowns.forEach(function(d) {
            d.classList.remove("show");
        });
    }
}

