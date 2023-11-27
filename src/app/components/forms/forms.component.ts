import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  results = []
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private unitService: UnitService) {
  }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.unitService.getAllUnits().subscribe(data => console.log(data));
  }

  onClean() {
    this.formGroup.reset
  }

}
