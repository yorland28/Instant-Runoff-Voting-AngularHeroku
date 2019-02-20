import { Component, OnInit } from '@angular/core';
import {VotingService} from "../voting.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public roundsResult = [];
  public totalVotes = 0
  public thewinner;
  public totalbudget;

  constructor(private votingService: VotingService) { }

  ngOnInit() {
    this.roundsResult = this.votingService.rounds;
    this.totalVotes = this.votingService.votesCount;
    this.thewinner = this.votingService.theWinner;
    this.totalbudget = this.votingService.totalbudget;
  }

}
