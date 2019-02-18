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

  resetVoting(){
    this.votesSelected = [];
    this.votesCount = 0;
    this.rounds = [];
    this.roundCount = 0;
  }

  setOptions (optionNumber : number) {
    this.optionsList = [];
    for (var i = 0; i < optionNumber; i++) {
      this.optionsList.push({id:this.alphabet[i],glosa:''});
    }
  }

  saveVotes (newvotes) {
    this.votesSelected.push({id:this.votesCount,votes: newvotes});
    this.votesCount++;
  }

  setVotingResult(){
    var end = false;
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
        console.log(option.id, count);
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
    this.rounds.push({round:this.roundCount,result:list});
      if((major.count > this.votesCount/2) || major.count === minor.count || major.count <1){
        console.log(this.rounds);
        return true;
      }
      else if (minor && minor.option){
        for (let voteSelected of this.votesSelected) {
          if (voteSelected.votes[0] === minor.option.id) {
            voteSelected.votes = voteSelected.votes.filter(item => item !== minor.option.id);
          }
        }
        return false;
      }

  }

  constructor() { }
}
