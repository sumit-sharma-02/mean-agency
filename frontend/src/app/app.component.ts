import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
