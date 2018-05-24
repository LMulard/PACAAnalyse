import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PolluantsComponent } from './polluants/polluants.component';
import { PolluantDetailComponent } from './polluant-detail/polluant-detail.component';
import { PolluantsService } from './_services/polluants.service';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FleuvesComponent } from './fleuves/fleuves.component';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent }, {path: 'polluants', component: PolluantsComponent}, {path: 'regions', component: RegionComponent}, {path: 'fleuves', component: FleuvesComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    PolluantsComponent,
    PolluantDetailComponent,
    RegionComponent,
    AccueilComponent,
    FleuvesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), BrowserModule, FormsModule
  ],
  providers: [PolluantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
