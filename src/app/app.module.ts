import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {FormsModule} from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateDrivenExampleComponent } from './template-driven-example/template-driven-example.component';

const Route: Routes = [{
  path: 'template-forms' ,component: TemplateDrivenExampleComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateDrivenExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(Route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
