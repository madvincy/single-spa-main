import { Component, OnInit } from '@angular/core';
import { PatientSearchService } from './app.service';
import { Patient } from './models/patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public patients: Patient[];
  public isResetButton = true;
  public hideResults = true;

  constructor(private patientSearchService: PatientSearchService) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  getSearchValue(value): void {
    console.log(value);
    this.patientSearchService.searchPatient(value)
      .subscribe(
        (data) => {
          console.log('results : ', data);
          this.patients = data;
          this.showResults(data);
        }
      );
  }

  public selectPatient(patient) {
    console.log('Patient selected: ', patient);
  }

  public showResults(results) {
    this.hideResults = false;
    console.log('Patient selected: ', results);
  }

}
