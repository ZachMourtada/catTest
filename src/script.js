const facts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have five toes on their front paws, but only four on the back.",
    "Cats can jump up to six times their body length.",
    "Each cat’s nose print is unique."
];

const button = document.getElementById("factBtn");
const factText = document.getElementById("factText");

button.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;
});
button.addEventListener('dblclick', () => {
  factText.textContent = facts[0];
});