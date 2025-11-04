// Art.js
"use strict";

const animalFacts = [
    "A group of flamingos is called a flamboyance.",
    "Octopuses have three hearts and blue blood.",
    "One of the code's is 'Articulate'",
    "A snail can sleep for up to three years.",
    "Elephants are the only mammals that can't jump.",
    "Honeybees can recognize human faces.",
    "A shrimp's heart is in its head.",
    "Sea otters hold hands while sleeping so they don't drift apart.",
    "Kangaroos can't walk backwards.",
    "Frogs absorb water through their skin and don't need to drink.",
    "Starfish eat by taking out thier stomach and using thier stomach acid to disove prey",
    "sharks as a species are older than Trees and even older than Saturn's rings "
];

function getRandomFact() {
    return animalFacts[Math.floor(Math.random() * animalFacts.length)];
}

document.addEventListener("DOMContentLoaded", () => {
    const questionLink = document.querySelector("a.question");
    const factParagraph = document.querySelector("p.fact");

    if (!questionLink || !factParagraph) return;

    questionLink.addEventListener("click", (ev) => {
        ev.preventDefault(); // stop default anchor navigation (if any)
        factParagraph.textContent = getRandomFact();
    });
});

