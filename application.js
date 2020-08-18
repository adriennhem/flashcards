const flashcard = document.getElementById('flashcard-text');
const answerBox = document.getElementById('flashcard-answer');
const buttonAnswer = document.getElementById('button-answer');
const buttonNext = document.getElementById('button-next');

let flashcardsCollection = [
    {question: "What is recursion?", answer: "Recursion is ..."},
    {question: "What is JavaScript?", answer: "JavaScript is a programmed language"}
];

const randomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
}; 

const displayFlashcard = () => {
    const number = randomNumber(flashcardsCollection);
    flashcard.setAttribute('data-key', number);
    flashcard.innerText = flashcardsCollection[number]['question'];
};

const displayAnswer = (key) => {
    answerBox.innerText = flashcardsCollection[key]['answer'];
};

const hideAnswer = () => {
    buttonAnswer.innerText = 'View Answer';
    answerBox.innerText = '';
};

buttonAnswer.addEventListener('click', (e) => {
    e.preventDefault;
    if (buttonAnswer.innerText == 'View Answer') {
        flashcardKey = parseInt(flashcard.dataset.key);
        displayAnswer(flashcardKey);
        buttonAnswer.innerText = 'Hide Answer';
    } else {
        hideAnswer();
    }
});

buttonNext.addEventListener('click', (e) => {
    e.preventDefault;
    hideAnswer();
    key = parseInt(flashcard.dataset.key);
    flashcardsCollection.splice(key, 1);

    if (flashcardsCollection.length > 0) {
        displayFlashcard();
    } else {
        flashcard.innerText = 'Congratulations, there is no more question!'
        buttonNext.classList.add('disabled');
        buttonNext.disabled = true;
        buttonAnswer.classList.add('disabled');
        buttonAnswer.disabled = true;
    }
});

displayFlashcard();