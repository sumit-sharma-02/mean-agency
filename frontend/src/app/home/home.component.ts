import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'mean-agency';
  count:number = 0;
  countGreaterThanFive:boolean = false
  inputValue = "asdad";

  setCount = () => {
    this.count += 1;
    if(this.count > 5) {
      this.countGreaterThanFive = true;
    }
  }
}
