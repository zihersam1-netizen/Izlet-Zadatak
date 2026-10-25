
let ime = prompt("Unesi svoje ime:");
let cijenaUlaznice = Number(prompt("Unesi cijenu jedne ulaznice:"));
let brojUlaznica = Number(prompt("Unesi broj ulaznica:"));
let budzet = Number(prompt("Unesi raspoloživi budžet:"));

let ukupniTrosak = cijenaUlaznice * brojUlaznica;
let ticketToMoon = budzet - ukupniTrosak;
let dovoljnoNovca = budzet >= ukupniTrosak;
let tocanIznos = budzet === ukupniTrosak;

let nastavakPlaniranja = confirm("Želiš li nastaviti s planiranjem izleta?");

alert(
    "Ime: " + ime +
    "\nUkupni trosak: " + ukupniTrosak + " EUR" +
    "\nPreostali iznos: " + ticketToMoon + " EUR" +
    "\nDovoljno novca: " + dovoljnoNovca +
    "\nTocan iznos: " + tocanIznos +
    "\nNastavak planiranja: " + nastavakPlaniranja
);