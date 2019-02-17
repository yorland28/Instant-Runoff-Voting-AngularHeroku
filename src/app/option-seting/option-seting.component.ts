import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-seting',
  templateUrl: './option-seting.component.html',
  styleUrls: ['./option-seting.component.css']
})
export class OptionSetingComponent implements OnInit {
  options = [];

  constructor() { }

  setOptionsNumber(optionNumber:number): void {
    for (var i = 0; i < optionNumber; i++) {
      this.options.push({id:i+1,glosa:''});
    }
  }

  ngOnInit() {
  }

}
