function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getRandomLetters(count) {
    let letters = "";
    for (let i = 0; i < count; i++) {
        letters += getRandomLetter();
    }
    return letters;
}

var container = document.getElementById('container');

function resetContainer() {
    container.textContent = getRandomLetters(2);
}

resetContainer(); 

window.addEventListener("keyup", function(e) {
    console.log(e.key);
    var currentText = container.textContent;

    if (e.key === currentText[0]) {
        
        container.textContent = currentText.substring(1) + getRandomLetters(Math.floor(Math.random() * 3) + 1);
    } else if (e.key === "Escape") {
        
        resetContainer();
    } else if (e.key === "Backspace") {
        
        container.textContent = currentText.slice(0, -1);
        
        if (container.textContent === "") {
            resetContainer();
        }
    }
});