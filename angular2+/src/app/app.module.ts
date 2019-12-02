import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { enableProdMode } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import {SharedModule} from './shared/shared.module';
import {PageModule} from './page/page.module';
import {AuthModule} from './auth/auth.module';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavigationComponent,
  ],
  imports: [SharedModule, PageModule, AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
