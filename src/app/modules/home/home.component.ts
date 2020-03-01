import { Component } from "@angular/core";
import { CoreComponent } from "../../core/core.component";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent extends CoreComponent {

  constructor() {
    super();
  }

}
