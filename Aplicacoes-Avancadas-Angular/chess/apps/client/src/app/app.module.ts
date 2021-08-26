import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { LogicSquareDirective } from './directives/logic-square.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    BoardComponent,
    LogicSquareDirective,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
