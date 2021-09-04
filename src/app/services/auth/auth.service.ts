import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getCurrentAuthenticatedUser(): Promise<any> {
    return Auth.currentAuthenticatedUser();
  }
}
