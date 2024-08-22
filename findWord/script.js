document.getElementById('findButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const word = document.getElementById('wordInput').value;
    const result = document.getElementById('result');

    if (word === '') {
        result.textContent = 'Please enter a word to search for.';
        return;
    }

    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);

    if (matches) {
        result.textContent = `The word "${word}" was found ${matches.length} times.`;
    } else {
        result.textContent = `The word "${word}" was not found.`;
    }
});
