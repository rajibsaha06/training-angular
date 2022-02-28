import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableModule } from 'primeng/table';
import { SliderTwoComponent } from './components/slider-two/slider-two.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SliderThreeComponent } from './components/slider-three/slider-three.component';
// import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    DashboardComponent,
    InboxComponent,
    SliderComponent,
    SliderTwoComponent,
    SliderThreeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DropdownModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
  // providers: [HomeService],
})
export class HomeModule {}
