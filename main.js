class TennisGame{
    constructor(player1, player2){
        this.playerOne = player1;
        this.playerTwo = player2;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
    }

    playerOneScores(){
        this.playerOneScore ++;
    }

    playerTwoScores(){
        this.playerTwoScore ++;
    }

    isDeuce(){
        let one = this.playerOneScore;
        let two = this.playerTwoScore

        if((one>=3 || two>=3) && one===two){
            return true;
        }
        else{
            return false;
        }
        
    }

    playerWithHighestScore(){
        let one = this.playerOneScore;
        let two = this.playerTwoScore;

        if(one > two){
            return this.playerOne;
        }
        else if(one < two){
            return this.playerTwo;
        }
    }

    hasWinner(){
        let one = this.playerOneScore;
        let two = this.playerTwoScore;

        if((one === 4 || two === 4) && one !== two){
            return true;
        }
        else{
            return false;
        }
    }

    hasAdvantage(){
        let one = this.playerOneScore;
        let two = this.playerTwoScore;
        if((one==two+1 || one+1==two)&& one>=3 && two>=3){
            return true;
        }
        else{
            return false;
        }
    }

    translateScore(score){
        if(score === 0){
            return "Love"
        }
        else if(score ===1){
            return "Fifteen"
        }
        else if(score ===2){
            return "Thirty"
        }
        
        else if(score ===3){
            return "Forty"
        }
    }

    getScore(){
        let one = this.playerOneScore;
        let two = this.playerTwoScore;

        if(this.isDeuce()){
            return "Deuce"
        }

        else if(this.hasAdvantage()){
            if(one > two){
                return "Advantage " + this.playerOne
            }
            
            else if(two > one){
                return "Advantage " + this.playerTwo
            }
        }

        else if(this.hasWinner()){
            if(one > two){
                return this.playerOne + " wins"
            }
            
            else if(two > one){
                return this.playerTwo + " wins"
            }
        }

        else if(one === two){
            return this.translateScore(one) + " all"
        }

        else{
            return this.translateScore(one) +", "+ this.translateScore(two)
        }
    }
}
