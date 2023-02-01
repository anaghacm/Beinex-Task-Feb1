import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './testimonial/banner/banner.component';
import { VideosectionComponent } from './testimonial/videosection/videosection.component';
import { ReviewsComponent } from './testimonial/reviews/reviews.component';
import { DemorequestComponent } from './testimonial/demorequest/demorequest.component';
import { DisplayfeedbackComponent } from './testimonial/displayfeedback/displayfeedback.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SaleshomeComponent } from './sales/saleshome/saleshome.component';
import { BloghomeComponent } from './blog/bloghome/bloghome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BannerSalesComponent } from './sales/banner-sales/banner-sales.component';
import { OffersSalesComponent } from './sales/offers-sales/offers-sales.component';
import { CasestudySalesComponent } from './sales/casestudy-sales/casestudy-sales.component';
import { BannerBlogComponent } from './blog/banner-blog/banner-blog.component';
import { WritersBlogComponent } from './blog/writers-blog/writers-blog.component';
import { DncBlogComponent } from './blog/dnc-blog/dnc-blog.component';
import { NocompromiseBlogComponent } from './blog/nocompromise-blog/nocompromise-blog.component';
import { ContactBlogComponent } from './blog/contact-blog/contact-blog.component';
import { ReviewblockComponent } from './testimonial/reviewblock/reviewblock.component';
import { OfferblockComponent } from './sales/offerblock/offerblock.component';
import { CasestudyblockComponent } from './sales/casestudyblock/casestudyblock.component';
import { OptionalfooterComponent } from './optionalfooter/optionalfooter.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    VideosectionComponent,
    ReviewsComponent,
    DemorequestComponent,
    DisplayfeedbackComponent,
    NavbarComponent,
    FooterComponent,
    SaleshomeComponent,
    BloghomeComponent,
    PagenotfoundComponent,
    BannerSalesComponent,
    OffersSalesComponent,
    CasestudySalesComponent,
    BannerBlogComponent,
    WritersBlogComponent,
    DncBlogComponent,
    NocompromiseBlogComponent,
    ContactBlogComponent,
    ReviewblockComponent,
    OfferblockComponent,
    CasestudyblockComponent,
    OptionalfooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
