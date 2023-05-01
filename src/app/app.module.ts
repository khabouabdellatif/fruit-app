import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { ApixuService } from "./apixu.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } "@angular/common/http";
import { ApixuService } from "./apixu.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes)
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
