import { Component, OnInit } from '@angular/core';
import {VotingService} from "../voting.service";

@Component({
  selector: 'app-option-seting',
  templateUrl: './option-seting.component.html',
  styleUrls: ['./option-seting.component.css']
})
export class OptionSetingComponent implements OnInit {
  options = [];
  budget = 0;
  showNext;

  constructor(private votingService: VotingService) { }

  setOptions(optionNumber:number): void {
    this.votingService.setOptions(optionNumber);
    this.options = this.votingService.optionsList;
  }

  setTotalbudget(totalbudget:number){
    this.budget = this.votingService.totalbudget = +totalbudget;
    this.validateOptionValues();
  }

  setOptionsValue(optionId: string,price:number) {
      this.votingService.setOptionPrice({id: optionId, price: +price});
      console.log(this.votingService.optionsList);
    this.validateOptionValues();
  }

  validateOptionValues(){
    this.showNext = false;
    var list = this.options.filter(item => item.price <= this.budget && item.price > 0);
    if(list.length === this.options.length){
      this.showNext = true;
    }
  }

  ngOnInit() {
    this.options = [];
    this.showNext = false
    this.votingService.resetVoting();
  }

}
