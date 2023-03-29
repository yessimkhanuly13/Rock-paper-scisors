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
        return "Its draw!";
    }
    else if(str1 == "Rock" && str2 == "Paper"){
        return "You lost! Paper beats Rock"
    }
    else if(str1 == "Rock" && str2 == "Scisors"){
        return "You won! Rock beats Scisors"
    }
    else if(str1 == "Rock" && str2 == "Rock"){
        return "It's draw!"
    }
    else if(str1 == "Scisors" && str2 == "Paper"){
        return "You won! Scisors beat Paper "
    }
    else if(str1 == "Scisors" && str2 == "Rock"){
        return "You lost! Rock beats Scisors"
    }
    else if(str1 == "Scisors" && str2 == "Scisors"){
        return "It's draw!"
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
const content = document.querySelector('#text');
const btnPaper = document.querySelector('#paper');
const btnRock = document.querySelector('#rock');
const btnScisors = document.querySelector('#scisors');
const par =  document.createElement('p');


btnPaper.addEventListener('click', ()=>{
    let computerSelection = getComputerChoice();
    let playerSelection = "Paper"
    par.textContent = playRound(playerSelection, computerSelection);
    content.appendChild(par);
   console.log(playRound(playerSelection, computerSelection))
});


btnRock.addEventListener('click', ()=>{
    let computer = getComputerChoice();
    let player = "Rock";
    par.textContent = playRound(player, computer);
    content.appendChild(par);
    console.log(playRound(player, computer))
} );

btnScisors.addEventListener('click', ()=>{
    let comp = getComputerChoice();
    let plr = "Scisors";
    par.textContent = playRound(plr, comp);
    content.appendChild(par);
    console.log(playRound(plr, comp));
});



console.log(game(4));
