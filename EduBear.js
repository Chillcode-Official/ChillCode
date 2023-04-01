document.addEventListener('DOMContentLoaded', (event) => {
		document.querySelectorAll('pre code').forEach((el) => {
				hljs.highlightElement(el);
		});
});
function toggleDropdown(button) {
		let dropdown = button.nextElementSibling;
		dropdown.classList.toggle("show");
		// dodanie event listenera do body, aby móc zamykać menu tylko poprzez ponowne kliknięcie w przycisk
		document.body.addEventListener('click', closeDropdown);

		// funkcja, która sprawia, że gdy klikniesz inne miejse niż przycisk dropdownu to się zamknie

		function closeDropdown(e) {
				// sprawdzenie, czy kliknięty element jest przyciskiem menu rozwijanego lub elementem wewnątrz menu rozwijanego
				if (e.target.closest('.dropdown') === button.closest('.dropdown')) {

				} else {
						dropdown.classList.remove('show');
						// usunięcie event listenera z body
						document.body.removeEventListener('click', closeDropdown);
				}
		}

}
/*
W tej zmodyfikowanej wersji funkcji toggleDropdown, po kliknięciu w przycisk, dodajemy nasłuchiwanie kliknięć na elementach strony poprzez addEventListener na elemencie document.body. Następnie definiujemy funkcję closeDropdown, która jest wywoływana, gdy użytkownik kliknie gdziekolwiek na stronie. W funkcji closeDropdown sprawdzamy, czy kliknięty element jest elementem przycisku menu rozwijanego lub elementem wewnątrz menu rozwijanego. Jeśli tak, to nic nie robimy. W przeciwnym razie, zamykamy menu rozwijane i usuwamy nasłuchiwanie kliknięć z elementu document.body poprzez removeEventListener. W ten sposób użytkownik będzie mógł zwinąć menu rozwijane tylko poprzez ponowne kliknięcie w przycisk.
*/

/*document.getElementById("myBtn").addEventListener("click", function(){
		alert("Button was clicked");
});*/


/*Bootstrap 5 components*/

/*Dropdown*/
document.addEventListener("DOMContentLoaded", function() {
		const dropdownToggle = document.querySelectorAll(".dropdown-toggle");

		dropdownToggle.forEach(function(dropdown) {
				dropdown.addEventListener("click", function() {
						const dropdownMenu = dropdown.nextElementSibling;

						if (dropdownMenu.style.display === "block") {
								dropdownMenu.style.display = "none";
								dropdown.setAttribute("aria-expanded", "false");
						} else {
								dropdownMenu.style.display = "block";
								dropdown.setAttribute("aria-expanded", "true");
						}
				});

				dropdown.addEventListener("blur", function() {
						const dropdownMenu = dropdown.nextElementSibling;
						dropdownMenu.style.display = "none";
						dropdown.setAttribute("aria-expanded", "false");
				});
		});
});
