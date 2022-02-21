import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  get othersForm() {
    return this.reactiveForm.get('others') as FormGroup;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      title: ['', Validators.required],
      email: ['', Validators.email],
      // phone: [null]
      others: this.fb.group({
        phone: [null],
      }),
    });
  }

  onSubmit() {
    // console.log(this.reactiveForm.get('title').value);

    // this.reactiveForm.get('title').setValue('Rajib');

    // this.reactiveForm.patchValue({
    //   title: 'adasd',
    //   email: 'rajj@gmail.com',
    //   phone: '',
    // });
    this.reactiveForm.markAllAsTouched();
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
    }
  }
}
