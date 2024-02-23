const padlOrel = Math.random() < 0.5;           //V souboru index.js si do proměnné padlOrel uložte hodnotu true nebo false na základě náhodné hodnoty z funkce Math.random(). Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.
const vysledekElement = document.querySelector(".vysledek");
const minceElement = document.querySelector(".mince") // přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.

if (padlOrel) {                                 //Pomocí document.querySelector vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem Padl orel nebo Padla panna na základě náhodné hodnoty z předchozího kroku.
    vysledekElement.textContent = "Padl orel";
    minceElement.classList.add("mince--orel");
} else {
    vysledekElement.textContent = "Padla panna";
    minceElement.classList.add("mince--panna");
}


 
