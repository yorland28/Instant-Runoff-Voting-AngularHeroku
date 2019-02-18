import { Component, OnInit } from '@angular/core';
import {VotingService} from "../voting.service";

@Component({
  selector: 'app-option-seting',
  templateUrl: './option-seting.component.html',
  styleUrls: ['./option-seting.component.css']
})
export class OptionSetingComponent implements OnInit {
  options = [];

  constructor(private votingService: VotingService) { }

  setOptions(optionNumber:number): void {
    this.votingService.setOptions(optionNumber);
    this.options = this.votingService.optionsList;
  }

  ngOnInit() {
    this.options = [];
    this.votingService.resetVoting();
  }

}
