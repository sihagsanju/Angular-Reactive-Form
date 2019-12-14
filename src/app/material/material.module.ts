import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule]
})
export class MaterialModule { }
