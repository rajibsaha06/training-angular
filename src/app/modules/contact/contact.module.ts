import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPageComponent,
      },
    ]),
  ],
})
export class ContactModule {}
