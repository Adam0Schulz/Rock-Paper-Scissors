const youScoreElem = document.getElementById('you_player_score')
const computerScoreElem = document.getElementById('computer_player_score')
let youScore = 0;
let computerScore = 0;

const youHand = document.getElementById('you_playing_hand')
const computerHand = document.getElementById('computer_playing_hand')

let i = 0
function play(move) {
    let interval = setInterval(() => {
        if (i == 100) {
            clearInterval(interval);
        } else {
            console.log('hello world')
            i++
        }
    },1000)

}
