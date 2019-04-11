import { Injectable } from '@angular/core';
import { LocalStorageService } from '../utils/local-storage.service';

@Injectable()
export class AppSettingsService {
  public static readonly DEFAULT_OPENMRS_SERVER_URL = 'https://ngx.ampath.or.ke/amrs';
  public static readonly OPENMRS_SERVER_KEY = 'ngx-amrs-server';
  private static readonly OPENMRS_REST_SUFFIX = 'ws/rest/v1/';
  private _openmrsServer: string;

  constructor(private localStorageService: LocalStorageService) {
    const cachedUrl = localStorageService.getItem(AppSettingsService.OPENMRS_SERVER_KEY);
    if (cachedUrl) {
      this._openmrsServer = cachedUrl;
    } else {
      this.setOpenmrsServer(AppSettingsService.DEFAULT_OPENMRS_SERVER_URL);
    }
  }

  public getOpenmrsServer(): string {
    return this.localStorageService
      .getItem(AppSettingsService.OPENMRS_SERVER_KEY) || this._openmrsServer;
  }

  public setOpenmrsServer(value: string): void {
    this.localStorageService.setItem(AppSettingsService.OPENMRS_SERVER_KEY, value);
    this._openmrsServer = value;
  }

  public getOpenmrsRestbaseurl(): string {
    if (this.getOpenmrsServer().endsWith('/')) {
      return this.getOpenmrsServer() + AppSettingsService.OPENMRS_REST_SUFFIX;
    } else {
      return this.getOpenmrsServer() + '/' + AppSettingsService.OPENMRS_REST_SUFFIX;
    }
  }
}
