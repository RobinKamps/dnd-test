import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KanbanModule} from "./simple-kanban/module";
import {DndModule} from "@ng-dnd/core";
import {HTML5ToTouch, MultiBackend} from '@ng-dnd/multi-backend';
import { CustomTransitions } from './customMultiBackend';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KanbanModule,
    // DndModule.forRoot({backend: MultiBackend, options: HTML5ToTouch})
    DndModule.forRoot({ backend: MultiBackend, options: CustomTransitions })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
