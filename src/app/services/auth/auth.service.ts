import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getCurrentUserInfo(): Promise<any> {
    return Auth.currentUserInfo();
  }

  getCurrentUserCredentials(): Promise<any> {
    return Auth.currentUserCredentials();
  }

  getCurrentPoolUser(): Promise<any> {
    return Auth.currentUserPoolUser();
  }

  getCurrentAuthenticatedUser(): Promise<any> {
    return Auth.currentAuthenticatedUser();
  }

  getCurrentCredentials(): Promise<any> {
    return Auth.currentCredentials();
  }

  getCurrentSession(): Promise<any> {
    return Auth.currentSession();
  }
}
