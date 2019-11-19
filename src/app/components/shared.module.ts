import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { IonicModule } from "@ionic/angular";
import { TitleComponent } from "./title/title.component";
import { ChatComponent } from "./chat/chat.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { SliderComponent } from "./slider/slider.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { HeaderComponent } from "./header/header.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FooterComponent,
    TitleComponent,
    ChatComponent,
    TestimonialsComponent,
    SliderComponent,
    SubscriptionComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    TitleComponent,
    ChatComponent,
    TestimonialsComponent,
    SliderComponent,
    SubscriptionComponent,
    HeaderComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule, CarouselModule.forRoot()]
})
export class SharedModule {}
