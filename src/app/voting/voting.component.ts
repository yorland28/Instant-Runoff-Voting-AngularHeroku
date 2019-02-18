import { Component, OnInit } from '@angular/core';
import {VotingService} from "../voting.service";

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  options = [];
  votes = [];
  generalVote= [];
  showVote = false;
  showVoteEnd = false;

  constructor(private votingService: VotingService) { }

  saveVote(vote):void{
    this.votes.push(vote.id);
    vote.selected = true;
    console.log(this.votes);
    if(this.votes.length === this.options.length){
      this.showVote = true;
    }
  }

  commitVote():void{
    this.votingService.saveVotes(this.votes);
    this.generalVote = this.votingService.votesSelected;
    if(this.generalVote.length > 1){
      this.showVoteEnd = true;
    }
    this.resetVote();
  }

  resetVote(){
    this.votes = [];
    this.showVote = false;
    for(let option of this.options){
      option.selected = false;
    }
  }

  resetVoting(){
    this.options = [];
    this.resetVote();

  }

  finishVoting (){
    this.votingService.setVotingResult();
  }

  ngOnInit() {
    this.options = this.votingService.optionsList;
  }

}
