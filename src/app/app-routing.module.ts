import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AuthTemplateUiComponent } from './pages/auth-template-ui/auth-template-ui.component';
import { AuthComponent } from './pages/auth/auth.component';
import { GraphqlComponent } from './pages/graphql/graphql.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'authTemplate', component: AuthTemplateUiComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'graphql', component: GraphqlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
