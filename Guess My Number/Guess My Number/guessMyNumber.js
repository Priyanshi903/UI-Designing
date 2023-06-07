// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;//Math.random() gives between 0 to 1
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);//number otherwise string
    if (!guess) {
        // document.querySelector('.message').textContent = '🛑 No Number!!!';
        displayMessage('🛑 No Number!!!');
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').style.width = '30rem';//notice...its as string
        document.querySelector('body').style.backgroundColor = '#60b347'; //camelCase for 2 words in js, in css it is background-color
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
            // document.querySelector('.message').textContent = '💥 You lost the Game';
            displayMessage('💥 You lost the Game');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';//notice: for number type 'value' is used
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});




















