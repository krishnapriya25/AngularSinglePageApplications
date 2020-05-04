// import { DataService } from './services/data.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './course/courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, PipeTransform, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
// import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
// import { NewCourseFormComponent} from './signup-form/new-course-form/new-course-form.component';
// import { PostsComponent } from './posts/posts.component';
// import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    GithubFollowersComponent,
    // NewCourseFormComponent,
    // PostsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    // PostService,
    CoursesService,
    AuthorsService,
    // DataService,
    {provide: ErrorHandler , useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
