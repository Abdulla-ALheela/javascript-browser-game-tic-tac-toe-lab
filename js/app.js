
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
// All possible win combos
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
const corners = [0,2,6,8];


/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;
let firstValue = "i";
let secondValue = "";
let thirdValue = "";
let i = 0;
let playerPlay;
let aiPlay;
let humanPlay;
let aiOn;
let aiTurn;
let random;
let comapre;
let randomCorner;

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

// Function to make AI think 
const decision = () => {
// check if player playing X or O
    if (humanPlay
        === "You play: X") {

        comapre = "X"

    } else {
        comapre = "O"
    };
//logic for AI to check if cneter empty to take it,check if AI can make wining move and check if player is about to win to block it
    switch (true) {
        case board[4] === "":
            board[4] = aiTurn
            break;
        case board[0] === aiTurn && board[1] === aiTurn && board[2] === "":
            board[2] = aiTurn
            break;
        case board[3] === aiTurn && board[4] === aiTurn && board[5] === "":
            board[5] = aiTurn
            break;
        case board[6] === aiTurn && board[7] === aiTurn && board[8] === "":
            board[8] = aiTurn
            break;
        case board[2] === aiTurn && board[1] === aiTurn && board[0] === "":
            board[0] = aiTurn
            break;
        case board[4] === aiTurn && board[5] === aiTurn && board[3] === "":
            board[3] = aiTurn
            break;
        case board[7] === aiTurn && board[8] === aiTurn && board[6] === "":
            board[6] = aiTurn
            break;
        case board[0] === aiTurn && board[2] === aiTurn && board[1] === "":
            board[1] = aiTurn
            break;
        case board[3] === aiTurn && board[5] === aiTurn && board[4] === "":
            board[4] = aiTurn
            break;
        case board[6] === aiTurn && board[8] === aiTurn && board[7] === "":
            board[7] = aiTurn
            break;
        case board[0] === aiTurn && board[3] === aiTurn && board[6] === "":
            board[6] = aiTurn
            break;
        case board[1] === aiTurn && board[4] === aiTurn && board[7] === "":
            board[7] = aiTurn
            break;
        case board[2] === aiTurn && board[5] === aiTurn && board[8] === "":
            board[8] = aiTurn
            break;
        case board[6] === aiTurn && board[3] === aiTurn && board[0] === "":
            board[0] = aiTurn
            break;
        case board[7] === aiTurn && board[4] === aiTurn && board[1] === "":
            board[1] = aiTurn
            break;
        case board[8] === aiTurn && board[5] === aiTurn && board[2] === "":
            board[2] = aiTurn
            break;
        case board[0] === aiTurn && board[6] === aiTurn && board[3] === "":
            board[3] = aiTurn
            break;
        case board[1] === aiTurn && board[7] === aiTurn && board[4] === "":
            board[4] = aiTurn
            break;
        case board[2] === aiTurn && board[8] === aiTurn && board[5] === "":
            board[5] = aiTurn
            break;
        case board[2] === aiTurn && board[4] === aiTurn && board[6] === "":
            board[6] = aiTurn
            break;
        case board[0] === aiTurn && board[4] === aiTurn && board[8] === "":
            board[8] = aiTurn
            break;
        case board[8] === aiTurn && board[4] === aiTurn && board[0] === "":
            board[0] = aiTurn
            break;
        case board[6] === aiTurn && board[4] === aiTurn && board[2] === "":
            board[2] = aiTurn
            break;
        case board[0] === comapre && board[1] === comapre && board[2] === "":
            board[2] = aiTurn
            break;
        case board[3] === comapre && board[4] === comapre && board[5] === "":
            board[5] = aiTurn
            break;
        case board[6] === comapre && board[7] === comapre && board[8] === "":
            board[8] = aiTurn
            break;
        case board[2] === comapre && board[1] === comapre && board[0] === "":
            board[0] = aiTurn
            break;
        case board[4] === comapre && board[5] === comapre && board[3] === "":
            board[3] = aiTurn
            break;
        case board[7] === comapre && board[8] === comapre && board[6] === "":
            board[6] = aiTurn
            break;
        case board[0] === comapre && board[2] === comapre && board[1] === "":
            board[1] = aiTurn
            break;
        case board[3] === comapre && board[5] === comapre && board[4] === "":
            board[4] = aiTurn
            break;
        case board[6] === comapre && board[8] === comapre && board[7] === "":
            board[7] = aiTurn
            break;
        case board[0] === comapre && board[3] === comapre && board[6] === "":
            board[6] = aiTurn
            break;
        case board[1] === comapre && board[4] === comapre && board[7] === "":
            board[7] = aiTurn
            break;
        case board[2] === comapre && board[5] === comapre && board[8] === "":
            board[8] = aiTurn
            break;
        case board[6] === comapre && board[3] === comapre && board[0] === "":
            board[0] = aiTurn
            break;
        case board[7] === comapre && board[4] === comapre && board[1] === "":
            board[1] = aiTurn
            break;
        case board[8] === comapre && board[5] === comapre && board[2] === "":
            board[2] = aiTurn
            break;
        case board[0] === comapre && board[6] === comapre && board[3] === "":
            board[3] = aiTurn
            break;
        case board[1] === comapre && board[7] === comapre && board[4] === "":
            board[4] = aiTurn
            break;
        case board[2] === comapre && board[8] === comapre && board[5] === "":
            board[5] = aiTurn
            break;
        case board[2] === comapre && board[4] === comapre && board[6] === "":
            board[6] = aiTurn
            break;
        case board[0] === comapre && board[4] === comapre && board[8] === "":
            board[8] = aiTurn
            break;
        case board[8] === comapre && board[4] === comapre && board[0] === "":
            board[0] = aiTurn
            break;
        case board[6] === comapre && board[4] === comapre && board[2] === "":
            board[2] = aiTurn
            break;
            case board[0] === "":
            board[0] = aiTurn
            break;
            case board[2] === "":
            board[2] = aiTurn
            break;
            case board[6] === "":
            board[6] = aiTurn
            break;
            case board[8] === "":
            board[8] = aiTurn
            break;
        default:
            // reandom decision
            if (aiOn === true && winner === false && tie === false) {
                random = Math.floor(Math.random() * 9)
                while (board[random] != "") {
                    random = Math.floor(Math.random() * 9)

                }
                board[random] = aiTurn
            };

    }
};
// finction to handle AI turn 
const ai = () => {
    decision();
    checkForWinner();
    checkForTie();

// switch AI turn
    if (aiTurn === "X" && winner === false) {
        turn = "O"
    } else if (aiTurn === "O" && winner === false) {
        turn = "X"

    };
//switch turn for updateMassage function to display the correct outcome

    if (winner === true) {

        if (turn === "X") {
            turn = "O"
        } else if (aiTurn === "O") {
            turn = "X"
        };
    };
};

// function to detemine how play X and how play O if play with AI button pressed
const chose = () => {

    playerPlay = Math.floor(Math.random() * 2);


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
    };


};
// function to update game states 
const render = () => {
    updateBoard();
    updateMessage();
};


// function to update board states
const updateBoard = () => {

    squareEls.forEach((square) => {


        square.textContent = board[square.id];
        
        if(square.textContent === "X"){
            
            square.style.color = "darkorange";



        }else if(square.textContent === "O"){

            square.style.color = "gold";
            
        };

    });

};

// function to update message
const updateMessage = () => {

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

//function to check for winner
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

        };
        firstValue = "i";
        secondValue = "";
        thirdValue = "";
    });
}

//function to check for tie
const checkForTie = () => {


    board.forEach((elemetn) => {
        if (elemetn != "" && winner === false) {

            i++;
        };
    });
    if (i === 9 && winner === false) {

        tie = true

    } else {
        i = 0;
    };
};


//function to handle turn it update board arreay based on player slection and then flip turns
const handelTurn = (event) => {


    if (turn === "X" && board[event.srcElement.attributes[1].textContent] === "" && winner === false && tie === false) {
        board[event.srcElement.attributes[1].textContent] = "X";
        checkForWinner()

        turn = "O"
    } else if (turn === "O" && board[event.srcElement.attributes[1].textContent] === "" && winner === false && tie === false) {
        board[event.srcElement.attributes[1].textContent] = "O";
        checkForWinner()

        turn = "X"
    };

};

                    // const switchPlayer = (event) => {

                    //     if (turn === "X" && board[event.srcElement.attributes[1].textContent] === ""   && winner === false && tie === false) {


                    //     } else if (turn === "O" && board[event.srcElement.attributes[1].textContent] === ""   && winner === false && tie === false) {


                    //     }


                    // }
// function to handle click on boards this function trigger all the other function whenever player click the board
const handleClick = (event) => {

    handelTurn(event);
    checkForTie();
            // switchPlayer(event)
    if (aiOn === true && turn === aiTurn && winner === false) {

        ai();
    };

    render();
};

//function to initiate game for two players if play with friend button was clicked
const init = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    hiddenEl.forEach((elements) => {

        elements.classList.remove("hidden");

    })
    frindEl.textContent = "Reset";
    AiEl.textContent = "play with AI";
    playerEl.textContent = "";
    aiOn = false;
    render();

};
//function to initiate game to play with AI if play with AI button was clicked
const initAi = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    hiddenEl.forEach((elements) => {

        elements.classList.remove("hidden");

    });
    AiEl.textContent = "Reset";
    frindEl.textContent = "play with friend";
    aiOn = true;
    chose();
    if (aiOn === true && turn === aiTurn) {
        ai();
    }
    render();


};





/*----------------------------- Event Listeners -----------------------------*/

//eventlistener to handle player click 
squareEls.forEach((square) => {

    square.addEventListener("click", handleClick);


});

            // resetEl.addEventListener("click",init)
//initiate game with friend 
frindEl.addEventListener("click", init);
//initiate game with AI 
AiEl.addEventListener("click", initAi);