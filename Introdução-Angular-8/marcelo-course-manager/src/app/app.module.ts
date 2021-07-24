import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFountComponent } from './not-found/not-found.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    NotFountComponent,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',    
      },
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'course/info/:id',
        component: CourseInfoComponent,
      },
      {
        path: '**',
        component: NotFountComponent,
      },
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
