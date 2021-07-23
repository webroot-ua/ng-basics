import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true

  cards: Card[] = [
    {title: 'Card 1', text: 'Text of card #1. Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    {title: 'Card #2', text: 'Text of card #2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, recusandae!'},
    {title: 'The Card 3', text: 'Text of card #3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti fugiat suscipit.'}
  ]

  toggleCards() {
  this.toggle = !this.toggle
  }
}
