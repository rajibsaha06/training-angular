import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableModule } from 'primeng/table';
// import { HomeService } from './services/home.service';

@NgModule({
  declarations: [DashboardComponent, InboxComponent, SliderComponent],
  imports: [
    CommonModule,
    TableModule,
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
