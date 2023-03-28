console.log("fmkdmf")
function getComputerChoice(){
    let arr = ["Paper", "Rock", "Scisors" ];
    let num = Math.floor(Math.random() * 3);
    
    console.log(arr[num]);
    return arr[num];
}

function playRound(str1, str2){
    if(str1 == "Paper" && str2 == "Rock"){
        return "You won! Paper beats Rock"
    }
    else if(str1 == "Paper" && str2 == "Scisors"){
        return "You lost! Scisors beats Paper"
    }
    else if(str1 == "Paper" && str2 == "Paper"){
        return "Its draw";
    }
}

let scoreOfPlayer = 0;
let scoreOfComputer = 0;

function game (rounds) {
    const playerSelection = "Paper";

    for(let i = 0; i <= 100; i++){
        let computerSelection = getComputerChoice();
        if(playRound(playerSelection, computerSelection) == "You won! Paper beats Rock"){
            scoreOfPlayer++;
            if (scoreOfPlayer == 3){
                return "Player won! With score " + scoreOfPlayer + " : " + scoreOfComputer;
            } 
        }
        else if(playRound(playerSelection, computerSelection) == "You lost! Scisors beats Paper"){
            scoreOfComputer++;
            if(scoreOfComputer == 3){
                return "Computer won! With score " + scoreOfComputer + " : " + scoreOfPlayer;
            }
        }
    }

}

console.log(game(4));
