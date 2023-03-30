function getComputerChoice(){
    let arr = ["Paper", "Rock", "Scisors" ];
    let num = Math.floor(Math.random() * 3);
    
    console.log(arr[num]);
    return arr[num];
}

let scoreOfPlayer = 0;
let scoreOfComputer = 0;

function playRound(str1, str2){

    if(str1 == "Paper" && str2 == "Rock"){
        return "You won!"
    }
    else if(str1 == "Paper" && str2 == "Scisors"){
        return "You lost!"
    }
    else if(str1 == "Paper" && str2 == "Paper"){
        return "Its draw!";
    }
    else if(str1 == "Rock" && str2 == "Paper"){
        return "You lost!"
    }
    else if(str1 == "Rock" && str2 == "Scisors"){
        return "You won!"
    }
    else if(str1 == "Rock" && str2 == "Rock"){
        return "It's draw!"
    }
    else if(str1 == "Scisors" && str2 == "Paper"){
        return "You won!"
    }
    else if(str1 == "Scisors" && str2 == "Rock"){
        return "You lost!"
    }
    else if(str1 == "Scisors" && str2 == "Scisors"){
        return "It's draw!"
    }
}


// function game ( playerSelection, computerSelection, scoreOfPlayer, scoreOfComputer) {
        
//     if(playRound(playerSelection, computerSelection) == "You won!"){
//             scoreOfPlayer++;
//             if (scoreOfPlayer == 3){
//                 return "Player won! With score " + scoreOfPlayer + " : " + scoreOfComputer;
//             } 
//     }
//     else if(playRound(playerSelection, computerSelection) == "You lost!"){
//             scoreOfComputer++;
//             if(scoreOfComputer == 3){
//                 return "Computer won! With score " + scoreOfComputer + " : " + scoreOfPlayer;
//             }
//     }
// }
const content = document.querySelector('#text');
const btnPaper = document.querySelector('#paper');
const btnRock = document.querySelector('#rock');
const btnScisors = document.querySelector('#scisors');
const par =  document.createElement('p');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
par.classList.add('text')


btnPaper.addEventListener('click', ()=>{
    winner.textContent = "";
    let computerSelection = getComputerChoice();
    let playerSelection = "Paper"
    const round = playRound(playerSelection, computerSelection);
    par.textContent = round;

    if(round == "You won!"){
        scoreOfPlayer++;
    }
    else if(round == "You lost!"){
        scoreOfComputer++;
    }
    score.textContent = "Player : " + scoreOfPlayer + " - " + " Computer : " + scoreOfComputer;

    if(scoreOfComputer == 5){
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
        winner.textContent = "COMPUTER WON";
    }else if (scoreOfPlayer == 5){
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
        winner.textContent = "PLAYER WON";
    }

    content.appendChild(par);
});


btnRock.addEventListener('click', ()=>{
    winner.textContent = "";
    let computer = getComputerChoice();
    let player = "Rock";
    const round = playRound(player, computer);
    par.textContent = round;

    if(round == "You won!"){
        scoreOfPlayer++;
    }
    else if(round == "You lost!"){
        scoreOfComputer++;
    }

    score.textContent = "Player : " + scoreOfPlayer + " - " + " Computer : " + scoreOfComputer;

    if(scoreOfComputer == 5){
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
        winner.textContent = "COMPUTER WON";
    }else if (scoreOfPlayer == 5){
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
        winner.textContent = "PLAYER WON";
    }

    content.appendChild(par);
    
} );

btnScisors.addEventListener('click', ()=>{
    winner.textContent = "";
    let comp = getComputerChoice();
    let plr = "Scisors";
    const round = playRound(plr, comp);
    par.textContent = round;


    if(round == "You won!"){
        scoreOfPlayer++;
    }
    else if(round == "You lost!"){
        scoreOfComputer++;
    }


    score.textContent = "Player : " + scoreOfPlayer + " - " + " Computer : " + scoreOfComputer;


    if(scoreOfComputer == 5){
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
        winner.textContent = "COMPUTER WON";
    }else if (scoreOfPlayer == 5){
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
        winner.textContent = "PLAYER WON";
    }

    content.appendChild(par);
});

console.log("aha")
