class Game {
    check(guess, bot) { //1-R, 2-P, 3-S
        if (guess == 'R' || guess == 'r'){
        if (bot == 1) {
            return 'you draw';
        } else if (bot == 2) {
            return 'you lost';
        } else {
            return 'you win';
        }
    }
    if(guess == 'P' || guess == 'p' ){
        if (bot == 1) {
            return 'you win';
        } else if (bot == 2) {
            return 'you draw';
        } else {
            return 'you lost';
        }
    }
    if(guess == 'S' || guess == 's'){
        if (bot == 1) {
            return 'you lost';
        } else if (bot == 2) {
            return 'you win';
        } else {
            return 'you draw';
        }
    }
    }

}
export default Game;