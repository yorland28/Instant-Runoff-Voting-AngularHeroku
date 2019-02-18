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

  setOptions (optionNumber : number) {
    for (var i = 0; i < optionNumber; i++) {
      this.optionsList.push({id:this.alphabet[i],glosa:''});
    }
  }

  saveVotes (newvotes) {
    this.votesSelected.push({id:this.votesCount,votes: newvotes});
    this.votesCount++;
  }

  constructor() { }
}
