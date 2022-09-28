import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ListComponent} from "./pages/list/list.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'recipe-list', component: ListComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'detail', component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
    BlogComponent,
    ContactComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
