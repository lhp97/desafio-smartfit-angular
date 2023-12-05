import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from 'src/app/interfaces/location.interface';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  results: Location[] = []
  filtredResults: Location[] = []
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private unitService: UnitService) {
  }

  ngOnInit() {
    this.createForm()
    this.inicializaDados();

  }

  private inicializaDados() {
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filtredResults = data.locations
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
  }

  onSubmit() {
    if (!this.formGroup.value.showClosed) {
      this.filtredResults = this.results.filter(result => result.opened);
    } else {
      this.filtredResults = this.results
    }
  }

  onClean() {
    this.formGroup.reset
  }

}
