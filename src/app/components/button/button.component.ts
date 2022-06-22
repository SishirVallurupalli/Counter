import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  count:number;


  constructor() { }

  ngOnInit(): void {
    this.count = 0;
  }

  countUp()
  {
    ++this.count;
  }

  countDown()
  {
    --this.count;
  }

}
