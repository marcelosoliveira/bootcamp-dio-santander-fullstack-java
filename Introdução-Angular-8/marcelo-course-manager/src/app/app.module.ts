import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { NotFountComponent } from './core/component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
    {
        path: '**',
        component: NotFountComponent,
    },
], {
    initialNavigation: 'enabled'
}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
