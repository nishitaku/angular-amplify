import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-template-ui',
  templateUrl: './auth-template-ui.component.html',
  styleUrls: ['./auth-template-ui.component.scss'],
})
export class AuthTemplateUiComponent implements OnInit {
  data: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async onClickGetCurrentUserInfo() {
    this.data = await this.authService.getCurrentUserInfo();
  }

  async onClickGetCurrentUserCredentials() {
    this.data = await this.authService.getCurrentUserCredentials();
  }

  async onClickGetCurrentPoolUser() {
    this.data = await this.authService.getCurrentPoolUser();
  }

  async onClickGetAuthenticatedUser() {
    this.data = await this.authService.getCurrentAuthenticatedUser();
  }

  async onClickGetCredentials() {
    this.data = await this.authService.getCurrentCredentials();
  }

  async onClickGetCurrentSession() {
    this.data = await this.authService.getCurrentSession();
  }
}
