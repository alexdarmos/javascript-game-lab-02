//function startGame- decided to play game and sets player name
const startGame = () => {
    //prompt user if they would like to play game and say yes
    let playGame = prompt("Do you want to play a game? Type Yes or No");

    if (playGame === "Yes") {
        //set player name, hp, grants hp and wins 
        let playerName = prompt("What's your name champ?");
        let playerHp = 40;
        let grantHp = 10;
        let wins = 0;
        //call the startCombat function
        startCombat(playerName, playerHp, grantHp, wins);
    } else {
        //taunting the user
        console.log("What are you scared?");
    }

}

//runs the game
const startCombat = (playerName, playerHp, grantHp, wins) => {
    //flag for while loop
    let gameOver = false;
    //runs while game hasn't ended
    let continueFight = "Attack";

    while ((gameOver === false) || (continueFight === "Attack")) {

        if (continueFight === "Attack") {
            //deals out damage and logs it
            if (playerHp > 0 && grantHp > 0) {
                let damage = getRandomInt();
                let damage1 = getRandomInt();
                playerHp = playerHp - damage;
                grantHp = grantHp - damage1;
                console.log(`${playerName} hp: ${playerHp}`);
                console.log(`Grant hp: ${grantHp}`);
                continueFight = prompt("Attack or Quit?");
            }
            //adds a win when grant is defeated, resets grants hp
            else if (grantHp <= 0 && playerHp > 0) {
                wins += 1;
                if (wins < 3) {
                    grantHp = 10;
                    console.log(`Win: ${wins}/3`)
                }
                //game 0ver when wins equal 3
                else if (wins === 3) {
                    console.log(`Congrats ${playerName}, you win.`);
                    gameOver = true;
                    continueFight = "Quit";
                }
                //game over when player hp reaches zero first
            } else if (playerHp <= 0 && grantHp > 0) {
                console.log(`${playerName} has ${playerHp} health, and Grant has ${grantHp} health, you lose.`);
                gameOver = true;
                continueFight = "Quit";
            }
        }   else if (continueFight === "Quit")  {
            gameOver = true;
            console.log("Quitters never win!")
        }

    }
}

//decideds damage dealt between 1-5
const getRandomInt = () => {
    let calcDamage = Math.floor((Math.random() * 5) + 1);
    return calcDamage;
}
startGame();







