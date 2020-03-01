import { NgModule } from "@angular/core";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../../core/core.module";
import {CarouselComponent} from "./carousel/carousel.component";
import {PreviewComponent} from "./preview/preview.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [HomeComponent, CarouselComponent, PreviewComponent],
  imports: [CoreModule, NgbModule, CommonModule],
  exports: [HomeComponent, CarouselComponent, PreviewComponent]
})
export class HomeModule {}
