import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name = '';
  public date:  string = '';
//  public amount: number;

  onNameChange(event: string) {
    this.name = event;
    console.log(this.name)
  }
  onDateChange(event: string) {
    this.date = event;
    console.log(this.date)
  }
}
