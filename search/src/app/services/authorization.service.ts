import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthorizationService {
    constructor(http: HttpClient) {

    }

    createAuthorizationHeader(token: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + token);
    }
}
