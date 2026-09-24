"use strict";
const producten = [
    {
        naam: "Toetsenbord",
        prijs: 49.95,
        status: "op voorraad",
        beschrijving: "Mechanisch toetsenbord"
    },
    {
        naam: "Muis",
        prijs: 24.95,
        status: "uitverkocht"
    },
    {
        naam: "Monitor",
        prijs: 199,
        status: "op voorraad"
    }
];
function maakProductTekst(product) {
    let tekst = product.naam + " - EUR " + product.prijs;
    tekst += " - " + product.status;
    if (product.beschrijving) {
        tekst += " - " + product.beschrijving;
    }
    return tekst;
}
for (const product of producten) {
    console.log(maakProductTekst(product));
}
function toonProductenOpVoorraad(lijst) {
    for (const product of lijst) {
        if (product.status === "op voorraad") {
            console.log(product.naam);
        }
    }
}
toonProductenOpVoorraad(producten);
