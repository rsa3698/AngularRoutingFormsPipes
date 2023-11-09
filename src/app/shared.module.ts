
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';




@NgModule({
  declarations: [
   ShortenPipe,
   FilterPipe
  ],
  imports: [FormsModule,
    CommonModule],
  exports: [ShortenPipe,
    FilterPipe,FormsModule,
    CommonModule],
    
})
export class SharedModule {

}