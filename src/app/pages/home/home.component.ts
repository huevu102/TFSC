import {Component} from "@angular/core";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    // dots: true,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    },
    nav: true
  }
}
