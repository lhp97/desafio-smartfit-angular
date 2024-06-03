import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from 'src/app/interfaces/location.interface';
import { FilterUnitServicesService } from 'src/app/services/filter-unit.service';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();

  results: Location[] = []
  filteredUnits: Location[] = []
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private unitService: UnitService,
    private filterUnitService: FilterUnitServicesService) {
  }

  ngOnInit() {
    this.createForm()
    this.inicializaDados();
  }

  private inicializaDados() {
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredUnits = data
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
  }

  onSubmit() {
    let {showClosed, hour} = this.formGroup.value

    this.filteredUnits = this.filterUnitService.filter(this.results, showClosed, hour);

    this.unitService.setFilteredUnits(this.filteredUnits)

    this.submitEvent.emit();
  }

  onClean() {
    this.formGroup.reset
  }

}
