import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [MenuComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, NotFoundComponent],
})
export class SharedModule {}
