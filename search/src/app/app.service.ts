/* tslint:disable:no-inferrable-types */
import {take} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { PatientResourceService } from './services/patient-resource.service';
import { Patient } from './models/patient.model';

@Injectable()
export class PatientSearchService {
  public patientsSearchResults: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>([]);
  public searchString: string = '';
  public relationshipSearchString: string = '';

  constructor(private resouceService: PatientResourceService) {

  }

  public searchPatient(searchText: string): Observable<Patient[]> {
    const patientsSearchResults: Subject<Patient[]> = new Subject<Patient[]>();
    this.resouceService.searchPatient(searchText.trim(), false).pipe(
      take(1)).subscribe(
      (patients) => {
        const mappedPatients: Patient[] = new Array<Patient>();
        for (const patient of patients) {
          mappedPatients.push(new Patient(patient));
        }
        this.searchString = searchText.trim();
        patientsSearchResults.next(mappedPatients);
        this.patientsSearchResults.next(mappedPatients);
      },
      (error) => {
        this.patientsSearchResults.error(error);
        patientsSearchResults.error(error);

      }
      );
    return patientsSearchResults.asObservable();
  }

  public resetPatients() {
    this.patientsSearchResults.next(new Array<Patient>());
  }

}
