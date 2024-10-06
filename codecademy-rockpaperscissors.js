/* 

1. As a user, I want to provide an input and be told the result of the game. 
2. As a user, I want the computer to randomly generate a choice.
3. As a user, I want the computer to generate a choice based on the current seconds time. 
4. As a user, I want to run a predefined number of games and get a breakdown of the results - user win, computer win, tie. 
5. As a user, I want to do #4 and then display a graph of of the breakdown. A simple bar graph showing the results. 

*/



function getPlayerInput(userInput='Rock') {
    userInput = userInput.toLowerCase()
    switch (userInput) {
        case 'rock':
            console.log(`You selected rock`)
            return userInput
        case 'paper':
            console.log(`You selected paper`)
            return userInput
        
        case 'scissors':
            console.log(`You selected scissors`)
            return userInput
        
        default:
            console.log(`You selected something that was not valid --> ${userInput}`)
            return null
    }
}

function getComputerInput() {
    let compSelectionArray = ['rock', 'paper', 'scissors']
    compSelection = compSelectionArray[(Math.floor(Math.random()*compSelectionArray.length))]
    return compSelection
}

function getResult(userInput) {
    const playerInput = (getPlayerInput(userInput))
    const computerInput = (getComputerInput())

    if (playerInput === 'rock') {
        switch (computerInput) {
            case 'rock':
                console.log(`Player selected Rock --> ${playerInput}. \n Computer selected Rock --> ${computerInput}. \n The result is a tie.`)
                return 'tie'
            case 'paper':
                console.log(`Player selected Rock --> ${playerInput}. \n Computer selected Paper --> ${computerInput}. \n The result is a computer win.`)
                return 'computer win'
            case 'scissors':
                console.log(`Player selected Rock --> ${playerInput}. \n Computer selected Scissors --> ${computerInput}. \n The result is a player win.`)
                return 'player win'
                
        }

    } else {
        console.log('Something else')
    }
}

getResult()