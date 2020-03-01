import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [HeaderComponent],
  imports: [NgbModule],
  exports: [HeaderComponent]
})

export class DefaultModule {}
