import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-template-ui',
  templateUrl: './auth-template-ui.component.html',
  styleUrls: ['./auth-template-ui.component.scss'],
})
export class AuthTemplateUiComponent implements OnInit {
  authenticatedUser: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async onClickGetAuthenticatedUser() {
    this.authenticatedUser =
      await this.authService.getCurrentAuthenticatedUser();
  }
}
