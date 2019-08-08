import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompService} from './comp.service';

import { AppComponent } from './app.component';
import { JobportComponent } from './jobport/jobport.component';


@NgModule({
  declarations: [
    AppComponent,
    JobportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
