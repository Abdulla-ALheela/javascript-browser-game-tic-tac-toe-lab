
//Minimum requirements

// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.




/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];


/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;
let firstValue = "i";
let secondValue = "";
let thirdValue = "";
let i = 0;
let playerPlay
let aiPlay
let humanPlay
let aiOn
let aiTurn
let random

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
// const resetEl = document.querySelector("#reset");
const frindEl = document.querySelector("#frind");
const AiEl = document.querySelector("#AI");
const hiddenEl = document.querySelectorAll(".hidden");
const hiddenAfterEl = document.querySelector(".hidden-after");
const playerEl = document.querySelector("#player");
/*-------------------------------- Functions --------------------------------*/
const ai = (event) => {
   
    if (aiOn === true && winner === false && tie === false) {
        random = Math.floor(Math.random() * 9)
        while(board[random] != ""){
            random = Math.floor(Math.random() * 9)

        }
        
        board[random] = aiTurn 
    }
    checkForWinner()
    checkForTie()
    console.log(winner);
    
    if(aiTurn === "X" && winner === false){
        turn = "O"
    } else if(aiTurn === "O" && winner === false){
        turn = "X"
    
    }
    
    if(winner === true){

console.log("win");

if(turn === "X"){
    turn ="O"
}else if(aiTurn === "O"){
    turn = "X"
}
    }
}


const chose = () => {

    playerPlay = Math.floor(Math.random() * 2)


    if (playerPlay === 0) {

        aiPlay = "AI play: X   |  "
        humanPlay = "You play: O"
        aiTurn = "X"
        playerEl.textContent = aiPlay + humanPlay
    } else if (playerPlay === 1) {
        aiPlay = "AI play: O   |  "
        humanPlay = "You play: X"
        aiTurn = "O"
        playerEl.textContent = aiPlay + humanPlay
    }


}

const render = () => {
    updateBoard();
    updateMessage();
}



const updateBoard = () => {

    squareEls.forEach((square) => {


        square.textContent = board[square.id];

    });

}


const updateMessage = () => {
    console.log(turn);
    console.log(humanPlay);
    console.log(winner);
    console.log(aiOn);
    //  if (winner === true && aiOn === true){
    //     if(turn === "X"){
    //         turn = "O"
    //     }else if(turn === "O"){
    //         turn = "X"
    //     }
    // }

    if (winner === false && tie === false) {

        if (turn === "X") {

            messageEl.textContent = "X turn";
        } else {
            messageEl.textContent = "O turn";
        };

    } else if (tie === true) {

        messageEl.textContent = "Tie";
    } else if (winner === true) {

        if (turn === "O") {

            messageEl.textContent = "X Win";
        } else {
            messageEl.textContent = "O Win";
        };
    };
};
const checkForWinner = () => {

    winningCombos.forEach((winningCombo) => {
        winningCombo.forEach((value) => {

            if (board[value] != "" && firstValue === "i") {
                firstValue = board[value]

            } else if (board[value] != "" && secondValue === "") {
                secondValue = board[value]

            } else if (board[value] != "" && thirdValue === "") {
                thirdValue = board[value]
            }
        });

        if (firstValue === secondValue && firstValue === thirdValue) {

            winner = true

        }
        firstValue = "i"
        secondValue = ""
        thirdValue = ""
    });
}


const checkForTie = () => {
   
    
    board.forEach((elemetn) => {
        if (elemetn != "" && winner === false) {

            i++;
        }
    });
    if (i === 9 && winner === false) {

        tie = true

    } else {
        i = 0;
    };
};



const handelTurn = (event) => {


    if (turn === "X" && board[event.srcElement.attributes[1].textContent] === "" && winner === false && tie === false) {
        board[event.srcElement.attributes[1].textContent] = "X";
        checkForWinner()
        
        turn = "O"
    } else if (turn === "O" && board[event.srcElement.attributes[1].textContent] === "" && winner === false && tie === false) {
        board[event.srcElement.attributes[1].textContent] = "O";
        checkForWinner()
        
       turn = "X"
    }

}

// const switchPlayer = (event) => {
    
//     if (turn === "X" && board[event.srcElement.attributes[1].textContent] === ""   && winner === false && tie === false) {
       
        
//     } else if (turn === "O" && board[event.srcElement.attributes[1].textContent] === ""   && winner === false && tie === false) {
      
        
//     }


// }

const handleClick = (event) => {
    
    handelTurn(event)
    checkForTie()
    // switchPlayer(event)
    if(aiOn === true && turn === aiTurn && winner === false){
        
        ai()
        }
       
    render()
}


const init = () => {
    board = ["", "", "", "", "", "", "", "", ""]
    turn = "X";
    winner = false;
    tie = false;
    hiddenEl.forEach((elements) => {

        elements.classList.remove("hidden");

    })
    frindEl.textContent = "Reset"
    AiEl.textContent = "play with AI"
    playerEl.textContent = ""
    aiOn = false
    render();

};

const initAi = () => {
    board = ["", "", "", "", "", "", "", "", ""]
    turn = "X";
    winner = false;
    tie = false;
    hiddenEl.forEach((elements) => {

        elements.classList.remove("hidden");

    })
    AiEl.textContent = "Reset"
    frindEl.textContent = "play with friend"
    aiOn = true
    chose();
    if(aiOn === true && turn === aiTurn ){
        ai()
        }
    render();


};





/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach((square) => {

    square.addEventListener("click", handleClick)


});

// resetEl.addEventListener("click",init)
frindEl.addEventListener("click", init)
AiEl.addEventListener("click", initAi)