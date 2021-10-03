// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Angular CDK
import { LayoutModule } from '@angular/cdk/layout';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

// Amplify
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthTemplateUiComponent } from './pages/auth-template-ui/auth-template-ui.component';
import { GraphqlComponent } from './pages/graphql/graphql.component';
import { TodoDialogComponent } from './pages/shared/todo-dialog/todo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AnalyticsComponent,
    AuthComponent,
    AuthTemplateUiComponent,
    GraphqlComponent,
    TodoDialogComponent,
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
    MatTableModule,
    MatDialogModule,
    AmplifyUIAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
