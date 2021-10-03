import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthTemplateUiComponent } from './pages/auth-template-ui/auth-template-ui.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { GraphqlComponent } from './pages/graphql/graphql.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AnalyticsComponent,
    AuthComponent,
    AuthTemplateUiComponent,
    GraphqlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AmplifyUIAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
