import { Injectable } from '@angular/core';
import { AppSettingsService } from './utils/app-settings.service';
import { SessionService } from './utils/session.service';
import { LocalStorageService } from './utils/local-storage.service';
import { SessionStorageService } from './utils/session-storage.service';
import { Constants } from './utils/constants';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmrsAuthService {

  constructor(
    private appSettingsService: AppSettingsService,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private sessionService: SessionService) { }

  public authenticate(username: string, password: string) {

    const credentials = {
      username: username,
      password: password
    };

    const request = this.sessionService.getSession(credentials);

    request.pipe(take(1)).subscribe((response: any) => {
        const data = response;
        if (data.authenticated) {
          this.setCredentials(username, password);
          // store logged in user details in session storage
          const user = data.user;
          this.storeUser(user);
        }
      });

    return request;
  }

  public clearSessionCache() {
    this.clearCredentials();
    this.clearUserDetails();
  }

  private setCredentials(username: string, password: string) {
    const base64 = btoa(username + ':' + password);
    this.sessionStorageService.setItem(Constants.CREDENTIALS_KEY, base64);
  }

  private clearCredentials() {

    this.sessionStorageService.remove(Constants.CREDENTIALS_KEY);
  }

  private storeUser(user: any) {
    this.sessionStorageService.setObject(Constants.USER_KEY, user);
  }

  private clearUserDetails() {
    this.sessionStorageService.remove(Constants.USER_KEY);
  }
}
