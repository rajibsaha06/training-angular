import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormNgComponent } from './components/form-ng/form-ng.component';

@NgModule({
  declarations: [ContactPageComponent, ReactiveFormComponent, FormNgComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPageComponent,
      },
      {
        path: 'ng-form',
        component: FormNgComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
    ]),
  ],
})
export class ContactModule {}
