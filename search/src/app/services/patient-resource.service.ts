
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Patient } from '../models/patient.model';


@Injectable()
export class PatientResourceService {

  public v: string = 'custom:(uuid,display,' +
    'identifiers:(identifier,uuid,preferred,location:(uuid,name),' +
    'identifierType:(uuid,name,format,formatDescription,validator)),' +
    'person:(uuid,display,gender,birthdate,dead,age,deathDate,birthdateEstimated,' +
    'causeOfDeath,preferredName:(uuid,preferred,givenName,middleName,familyName),'
    + 'attributes,preferredAddress:(uuid,preferred,address1,address2,cityVillage,longitude,' +
    'stateProvince,latitude,country,postalCode,countyDistrict,address3,address4,address5' +
    ',address6)))';

  constructor(protected http: HttpClient) {
  }

  public getUrl(): string {

    return  'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient';
  }

  public searchPatient(searchText: string, cached: boolean = false, v: string = null):
   Observable<any> {
    const url = this.getUrl();
    const token = '';
    const params: HttpParams = new HttpParams()
    .set('q', searchText)
    .set('v', (v && v.length > 0) ? v : this.v)
    .set('authorization', 'Basic ' + token);
    return this.http.get(url, {
      params: params
    }).pipe(
      map((response: any) => {
        return response.results;
      }));
  }

  public getPatientByUuid(uuid: string, cached: boolean = false, v: string = null):
  Observable<any> {

    let url = this.getUrl();
    url += '/' + uuid;

    const params: HttpParams = new HttpParams()
    .set('v', (v && v.length > 0) ? v : this.v);

    return this.http.get(url, {
      params: params
    });
  }
}
