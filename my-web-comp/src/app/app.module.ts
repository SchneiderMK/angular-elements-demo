import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [FirstComponent]
})
export class AppModule {     constructor(private readonly injector: Injector) { }

public ngDoBootstrap() {
    const elem = createCustomElement(FirstComponent, { injector: this.injector });
    customElements.define('first-component', elem);
}}
