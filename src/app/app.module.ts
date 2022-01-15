import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './store/reducers/news.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/effects/news.effect';
import { HttpClientModule } from '@angular/common/http';
import { SectionsComponent } from './sections/sections.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { sharedReducer } from './store/reducers/shared.reducer';
import { AppReducer } from './models/IStore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DetailsPageComponent,
    SectionsComponent,
    NewsComponent,
    NewsItemComponent,
    FilterPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([NewsEffects]),
    StoreDevtoolsModule.instrument({maxAge:10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
