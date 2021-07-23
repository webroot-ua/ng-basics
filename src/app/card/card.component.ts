import {Component, Input, OnInit} from '@angular/core'
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
  // interpolation: ['[[', '}}']
})
export class CardComponent implements OnInit {

  @Input() card!: Card
  @Input() index!: number

  title = 'My Card Title'
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore!'
  number = 42

  textColor = 'black'
  cardDate: Date = new Date()

  array = [1, 1, 2, 3, 5, 8, 13]
  obj = {name: 'Man', info: {age: 25, job: 'FrontEnd'}}

  disabled = false

  imgUrl: string = 'https://icon2.cleanpng.com/20180420/gjw/kisspng-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-5ad97b7fd9b082.9397629615242023678917.jpg'

  ngOnInit(): void {
    // console.log('ngOnInit')
    setTimeout(() => {
      this.imgUrl = 'https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png'
      this.disabled = true
    }, 3000)
  }

  getInfo(): string {
    return 'This is MyCard method getInfo()'
  }

  changeTitle() {
    this.card.title = 'this.title has been Changed )'
  }

  inputHandler(event: any) {
    // console.log(event)
    const value = event.target.value
    this.card.title = value
  }

  inputHandler2(value: any) {
    this.card.title = value
  }

  ChangeHandler() {
    console.log(this.card.title)
  }
}



// template: `
//     <div class="card">
//       <h2>card component</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore?</p>
//     </div>
//   `,
//   styles: [
//   `
//       .card {
//         padding: .5rem 1rem;
//         border: 2px dashed #aaa;
//         margin-bottom: 1rem;
//       }
//
//       h2 {
//         margin-bottom: .5rem;
//       }
//     `
// ]
