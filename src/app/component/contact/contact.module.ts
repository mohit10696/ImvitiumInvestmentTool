import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [FormsModule, CommonModule],
})
export class ContactModule {}
