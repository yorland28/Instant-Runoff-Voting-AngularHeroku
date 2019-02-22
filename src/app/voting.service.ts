import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VotingService {
  public optionsList = [];
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  public votesSelected = [];
  public votesCount = 0;
  public rounds = [];
  roundCount = 0;
  public totalbudget = 0;
  public showNewWinner = false;
  public winnersRound = [];

  resetVoting(){
    this.votesSelected = [];
    this.votesCount = 0;
    this.rounds = [];
    this.roundCount = 0;
  }

  setOptions (optionNumber : number) {
    this.optionsList = [];
    for (var i = 0; i < optionNumber; i++) {
      this.optionsList.push({id:this.alphabet[i],price:""});
    }
  }

  setOptionPrice(optionUpdated){

    for(let option of this.optionsList){
      if(option.id === optionUpdated.id){
        option.id = optionUpdated.id;
        option.price = optionUpdated.price;
      }
    }
  }

  saveVotes (newvotes) {
    this.votesSelected.push({id:this.votesCount,votes: newvotes});
    this.votesCount++;
  }

  setVotingResult(){
    var end = false;
    this.rounds = [];
    this.roundCount = 0;
    while (!end) {
      var result = [];
      var major={count:0,option:""};
      var minor = {count:this.votesCount,option:""};
      for (let option of this.optionsList) {
        var count = 0;
        for (let voteSelected of this.votesSelected) {
          if (voteSelected.votes[0] === option.id) {
            count++;
          }
        }
        result.push({option: option, voteCount: count});
        if (count > major.count) {
          major = {count: count, option: option};
        }
        if (minor.count > count && count > 0) {
          minor = {count: count, option: option};
        }
      }
      end = this.processResult(result, major, minor);
    }
  }

  processResult(list : string [],major,minor) : boolean{
    this.roundCount ++;
    this.rounds.push({round:this.roundCount,result:list,theWinner:"",totalbudget:""});
      //When there is a winner
      if((major.count > this.votesCount/2) || major.count === minor.count || major.count <1){
        this.processWinner(major.option);
        return true;
      }
      else if (minor && minor.option){
        this.deleteOption(minor.option);
        return false;
      }
  }

  processWinner(winnerOption){
    this.showNewWinner = false;
    this.totalbudget = +this.totalbudget - +winnerOption.price;
    this.rounds[this.roundCount - 1].theWinner = winnerOption;
    this.rounds[this.roundCount - 1].totalbudget = this.totalbudget ;

    this.winnersRound.push(this.rounds);
    console.log(this.winnersRound);

    this.optionsList = this.optionsList.filter(item => item.id != winnerOption.id);
    this.deleteOption(winnerOption);
    if(this.optionsList.filter(item => item.price <= this.totalbudget).length > 0){
      this.showNewWinner = true;
      this.processNewWinner();
    }
  }

  processNewWinner(){
    this.showNewWinner = false;
    var overratedOptions = this.optionsList.filter(item => item.price > this.totalbudget);
    if(overratedOptions.length > 0){
      for(let option of overratedOptions){
        this.deleteOption(option);
      }
    }
    this.setVotingResult();
  }

  deleteOption(optionTodelete){
    for (let voteSelected of this.votesSelected) {
      if (voteSelected.votes[0] === optionTodelete.id) {
        voteSelected.votes = voteSelected.votes.filter(item => item !== optionTodelete.id);
      }
    }
  }



  constructor() { }
}
