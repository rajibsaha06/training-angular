import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { NoSpecialCharectarsDirective } from './directives/no-special-charectars.directive';

@NgModule({
  declarations: [
    MenuComponent,
    NotFoundComponent,
    ShortenTextPipe,
    NoSpecialCharectarsDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MenuComponent,
    NotFoundComponent,
    ShortenTextPipe,
    NoSpecialCharectarsDirective,
  ],
})
export class SharedModule {}
