import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from '../../models/contact.interface';

@Component({
  selector: 'app-form-ng',
  templateUrl: './form-ng.component.html',
  styleUrls: ['./form-ng.component.scss'],
})
export class FormNgComponent implements OnInit {
  contactForm: any;
  contacts: ContactForm = {
    title: '',
    phone: null,
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
