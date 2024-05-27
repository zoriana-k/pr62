document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.test-btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', (event) => {
            const userAnswer = event.target.textContent;
            const correctAnswer = event.target.dataset.answer;
            if (userAnswer === correctAnswer) {
                event.target.classList.add('correct');
                event.target.classList.remove('incorrect');
            } else {
                event.target.classList.add('incorrect');
                event.target.classList.remove('correct');
            }
        });
    });
});
