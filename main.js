const randomChoice = () => {
    const possibleChoices = [0 , 1 , 2];
    const randInt = Math.floor(Math.random() * 3);
    const randChoice = possibleChoices[randInt];
    return randChoice;
};

const game = (plChoice) => {
 
    let youScore = 0;
    let computerScore = 0;
    const computerChoice = randomChoice()   

    const compareHands = () => {
        const youHand = document.getElementById('you_playing_hand');
        const computerHand = document.getElementById('computer_playing_hand');

        youHand.src = 'assets/' + plChoice + '.svg';
        computerHand.src = 'assets/' + computerChoice + '.svg';
    };

    const updateScore = () => {
        const youScoreElem = document.getElementById('you_player_score');
        const computerScoreElem = document.getElementById('computer_player_score');

        /*if (plChoice == computerChoice) {
            console.log("it's a tie")
        } else if (plChoice == 'rock') {
            if (computerChoice == 'paper') {
                computerScore++
            } else if (computerChoice == 'scissors') {
                youScore++
            }
        } else if (plChoice == 'paper') {
            if (computerChoice == 'rock') {
                youScore++
            } else if (computerChoice == 'scissors') {
                computerScore++
            }
        } else if (plChoice == 'scissors') {
            if (computerChoice == 'rock') {
                computerScore++
            } else if (computerChoice == 'paper') {
                youScore++
            }
        }*/


        if (plChoice == computerChoice) {
            console.log("It's a tie")
        } else if ((plChoice + 1) % 3 == computerChoice % 3) {
            computerScore++
        } else {
            youScore++
        }


        youScoreElem.innerText = parseInt(youScoreElem.innerText) + youScore;
        computerScoreElem.innerText = parseInt(computerScoreElem.innerText) + computerScore;
    };

    const animation = () => {
        const hands = document.querySelectorAll('.player_hand');

        hands.forEach((hand) => {
            hand.style.animation = "handAnimation 1.5s ease-in"
            hand.addEventListener('animationend', () => {
                hand.style.animation = "";
            });
            hand.addEventListener('animationstart', () => {
                hand.src = "assets/0.svg";
            });
        });
    };
    

    animation();
    setTimeout(() => {
        compareHands();
        updateScore();
    }, 1500)

}