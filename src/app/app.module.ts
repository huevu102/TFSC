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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import {DiaryComponent} from "./pages/blog/diary/diary.component";
import {LifestyleComponent} from "./pages/blog/lifestyle/lifestyle.component";
import {TipComponent} from "./pages/blog/tips/tip.component";
import {InspirationComponent} from "./pages/blog/inspriration/inspiration.component";
import {CupcakeComponent} from "./pages/list/cupcake/cupcake.component";
import {DessertComponent} from "./pages/list/dessert/dessert.component";
import {OccasionComponent} from "./pages/list/occasion/occasion.component";
import {SeasonComponent} from "./pages/list/season/season.component";
import {SearchComponent} from "./pages/search/search.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'recipe-list', component: ListComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'blog-tip', component: TipComponent},
  {path: 'blog-lifestyle', component: LifestyleComponent},
  {path: 'blog-diary', component: DiaryComponent},
  {path: 'blog-inspiration', component: InspirationComponent},
  {path: 'list-cupcake', component: CupcakeComponent},
  {path: 'list-dessert', component: DessertComponent},
  {path: 'list-occasion', component: OccasionComponent},
  {path: 'list-season', component: SeasonComponent},
  {path: 'search', component: SearchComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
    BlogComponent,
    ContactComponent,
    DetailComponent,
    DiaryComponent,
    LifestyleComponent,
    TipComponent,
    InspirationComponent,
    CupcakeComponent,
    DessertComponent,
    OccasionComponent,
    SeasonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
