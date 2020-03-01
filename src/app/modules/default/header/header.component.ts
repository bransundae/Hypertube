import { Component } from "@angular/core";
import {CoreComponent} from "../../../core/core.component";

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends CoreComponent{
  constructor() {
    super();
  }
}
