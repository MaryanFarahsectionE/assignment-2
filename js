document.addEventListener('DOMContentLoaded', function() {
    const characterCards = document.querySelectorAll('.character-card');

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const characterName = card.textContent;
            alert(`Dive deeper into the story of ${characterName} in Season 5.`);
        });
    });
});
