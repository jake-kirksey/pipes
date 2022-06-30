import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = '';
  public date:  string = '';
//  public amount: number;

  onNameChange(event: any) {
    this.name = event.target.value;
    console.log(this.name)
  }
  onDateChange(event: any) {
    this.date = event.target.value;
    console.log(this.date)
  }
}
