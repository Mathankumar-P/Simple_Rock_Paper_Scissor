const initGame = () =>
{
    const startGame = confirm("Do You Want To play Rock Paper Scisscors");
    (startGame)? playGame() : alert ("Maybe Next Time, See You Soon");
}
// GameFlow
const playGame =()=>
{
    while (true)
    {
        let playerChoice = getPlayerChoice();
        playerChoice = refactorPlayerChoice(playerChoice);
        if(playerChoice ==="")
        {
            invalidChoice();
            continue;
        }
        if(!playerChoice)
        {
            decidedNotTOPlay();
            break;
        }
        playerChoice = validatePlayerChoice (playerChoice);
        if(!playerChoice)
        {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result  = determinWinner(playerChoice, computerChoice);
        alert(result);
        if(askPlayAgain())
        {
            continue;
        }
        else
        {
            thanksForPlaying();
            break;
        }
    }
}
const getPlayerChoice = () =>
{
    return prompt("Please Enter Your Choice \nRock \nPaper \nScissors");
}
const refactorPlayerChoice= (playerChoice) =>
{
    if(playerChoice || playerChoice == "")
    {
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false;
    }
}
const invalidChoice = () =>
{
    alert("You Have Entered Wrong Input");
}
const decidedNotTOPlay= () =>
{
    alert("Thank You For Playing, See You Soon");
}
const validatePlayerChoice= (playerChoice) =>
{
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")
    {
        return playerChoice;
    }
    else{
        return false;
    }
}
const getComputerChoice = () =>
{
    let random = Math.floor(Math.random()*3);
    let choices = ["rock", "paper", "scissors"];
    return choices[random];
}

const determinWinner =(player, computer) =>
{
    let result = (computer==player) ?
        (`Player : ${player} \nComputer : ${computer} \nIt's a TIE GAME`) :
        (player=="rock" && computer =="paper") ? 
        (`Player : ${player} \nComputer : ${computer} \nIt's a Computer WINS`) :
        (player=="scissors" && computer =="rock") ? 
        (`Player : ${player} \nComputer : ${computer} \nIt's a Computer WINS`) :
        (player=="paper" && computer =="rock") ? 
        (`Player : ${player} \nComputer : ${computer} \nIt's a Computer WINS`) :
        (`Player : ${player} \nComputer : ${computer} \nIt's a PLAYER WINS `);
    return result;
}
const askPlayAgain = () =>
{
    return confirm("Do You Want To Play Again ?");
}
const thanksForPlaying = () =>
{
    alert("Thank You For Playing , See You Soon");
}
initGame();
